import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Processa o markdown de forma mais sofisticada
    let html = content;

    // Processa blocos de código primeiro
    html = html.replace(/```(\w+)\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // Processa código inline
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Processa títulos
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Processa listas
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Processa negrito e itálico
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Processa links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Processa parágrafos (linhas vazias separam parágrafos)
    const lines = html.split('\n');
    let inParagraph = false;
    let inCodeBlock = false;
    let inList = false;
    const processedLines: string[] = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Detecta blocos de código
      if (trimmedLine.startsWith('<pre>')) {
        inCodeBlock = true;
        if (inParagraph) {
          processedLines.push('</p>');
          inParagraph = false;
        }
        processedLines.push(line);
        return;
      }
      if (trimmedLine.startsWith('</pre>')) {
        inCodeBlock = false;
        processedLines.push(line);
        return;
      }

      // Detecta listas
      if (trimmedLine.startsWith('<ul>') || trimmedLine.startsWith('<li>')) {
        inList = true;
        if (inParagraph) {
          processedLines.push('</p>');
          inParagraph = false;
        }
        processedLines.push(line);
        return;
      }
      if (trimmedLine.startsWith('</ul>')) {
        inList = false;
        processedLines.push(line);
        return;
      }

      // Detecta títulos
      if (trimmedLine.match(/^<h[1-6]>/)) {
        if (inParagraph) {
          processedLines.push('</p>');
          inParagraph = false;
        }
        processedLines.push(line);
        return;
      }

      // Dentro de blocos de código ou listas, não processa
      if (inCodeBlock || inList) {
        processedLines.push(line);
        return;
      }

      // Linha vazia fecha parágrafo
      if (trimmedLine === '') {
        if (inParagraph) {
          processedLines.push('</p>');
          inParagraph = false;
        }
        return;
      }

      // Inicia novo parágrafo se necessário
      if (!inParagraph && trimmedLine !== '') {
        processedLines.push('<p>');
        inParagraph = true;
      }

      processedLines.push(line);
    });

    // Fecha parágrafo se ainda estiver aberto
    if (inParagraph) {
      processedLines.push('</p>');
    }

    containerRef.current.innerHTML = processedLines.join('\n');
  }, [content]);

  return <Box ref={containerRef} />;
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default MarkdownRenderer;

