import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Chip,
  IconButton,
  styled,
  alpha,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import { getBlogPostById } from '../../data/blogPosts';
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';

const PostContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  paddingTop: '100px',
  paddingBottom: '60px',
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  marginBottom: '24px',
  color: theme.palette.primary.contrastText,
  backgroundColor: alpha(theme.palette.background.paper, 0.05),
  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
    borderColor: theme.palette.secondary.main,
  },
}));

const PostHeader = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
  '& h1': {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    marginBottom: '24px',
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'wrap',
  marginBottom: '24px',
  '& .meta-item': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: alpha(theme.palette.primary.contrastText, 0.8),
    fontSize: '1rem',
    '& svg': {
      fontSize: '1.2rem',
      color: theme.palette.secondary.main,
    },
  },
}));

const PostContent = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.03),
  borderRadius: '16px',
  padding: '40px',
  border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    color: theme.palette.primary.contrastText,
    marginTop: '32px',
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  '& h1': { fontSize: '2.5rem' },
  '& h2': { fontSize: '2rem', borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`, paddingBottom: '8px' },
  '& h3': { fontSize: '1.5rem' },
  '& p': {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '16px',
    color: alpha(theme.palette.primary.contrastText, 0.9),
  },
  '& ul, & ol': {
    marginLeft: '24px',
    marginBottom: '16px',
    '& li': {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      marginBottom: '8px',
      color: alpha(theme.palette.primary.contrastText, 0.9),
    },
  },
  '& code': {
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.9em',
    color: theme.palette.secondary.main,
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
  },
  '& pre': {
    margin: '24px 0',
    borderRadius: '12px',
    overflow: 'hidden',
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
    '& code': {
      backgroundColor: 'transparent',
      padding: 0,
      color: 'inherit',
    },
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    paddingLeft: '16px',
    marginLeft: 0,
    fontStyle: 'italic',
    color: alpha(theme.palette.primary.contrastText, 0.8),
  },
  '& a': {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const TagsSection = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  paddingTop: '24px',
  borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  alignItems: 'center',
}));

const NotFound = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: '100px',
  '& h2': {
    color: theme.palette.primary.contrastText,
    marginBottom: '16px',
  },
  '& p': {
    color: alpha(theme.palette.primary.contrastText, 0.7),
  },
}));

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const post = postId ? getBlogPostById(postId) : undefined;

  if (!post) {
    return (
      <PostContainer>
        <Container maxWidth="md">
          <BackButton onClick={() => navigate('/blog')}>
            <ArrowBackIcon />
          </BackButton>
          <NotFound>
            <Typography variant="h2">Post não encontrado</Typography>
            <Typography>O artigo que você está procurando não existe ou foi removido.</Typography>
          </NotFound>
        </Container>
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <Container maxWidth="md">
        <BackButton onClick={() => navigate('/blog')}>
          <ArrowBackIcon />
        </BackButton>

        <PostHeader>
          <Chip
            label={post.category}
            sx={{
              mb: 2,
              backgroundColor: 'secondary.main',
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              padding: '8px 4px',
            }}
          />
          <Typography variant="h1">{post.title}</Typography>

          <PostMeta>
            <Box className="meta-item">
              <PersonIcon />
              <span>{post.author}</span>
            </Box>
            <Box className="meta-item">
              <CalendarTodayIcon />
              <span>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </Box>
            <Box className="meta-item">
              <AccessTimeIcon />
              <span>{post.readTime} de leitura</span>
            </Box>
          </PostMeta>

          <Typography
            sx={{
              fontSize: '1.3rem',
              color: alpha('#fff', 0.8),
              fontStyle: 'italic',
            }}
          >
            {post.excerpt}
          </Typography>
        </PostHeader>

        <PostContent>
          <MarkdownRenderer content={post.content} />

          <TagsSection>
            <Typography sx={{ color: 'primary.contrastText', fontWeight: 'bold', mr: 1 }}>
              Tags:
            </Typography>
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="medium"
                sx={{
                  backgroundColor: alpha('#fff', 0.1),
                  color: 'primary.contrastText',
                  border: `1px solid ${alpha('#fff', 0.2)}`,
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.2),
                  },
                }}
              />
            ))}
          </TagsSection>
        </PostContent>
      </Container>
    </PostContainer>
  );
};

export default BlogPost;

