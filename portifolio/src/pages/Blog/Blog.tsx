import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  TextField,
  InputAdornment,
  Grid,
  styled,
  alpha
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { blogPosts, getAllCategories } from '../../data/blogPosts';

const BlogContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  paddingTop: '100px',
  paddingBottom: '60px',
}));

const BlogHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '60px',
  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.contrastText})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  '& p': {
    fontSize: '1.2rem',
    color: alpha(theme.palette.primary.contrastText, 0.8),
    maxWidth: '600px',
    margin: '0 auto',
  },
}));

const SearchBox = styled(TextField)(({ theme }) => ({
  marginBottom: '40px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: alpha(theme.palette.background.paper, 0.05),
    borderRadius: '12px',
    '& fieldset': {
      borderColor: alpha(theme.palette.secondary.main, 0.3),
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.primary.contrastText,
  },
}));

const FilterSection = styled(Box)(() => ({
  marginBottom: '40px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  justifyContent: 'center',
}));

const FilterChip = styled(Chip)<{ selected?: boolean }>(({ theme, selected }) => ({
  backgroundColor: selected
    ? theme.palette.secondary.main
    : alpha(theme.palette.background.paper, 0.05),
  color: theme.palette.primary.contrastText,
  border: `1px solid ${selected ? theme.palette.secondary.main : alpha(theme.palette.secondary.main, 0.3)}`,
  '&:hover': {
    backgroundColor: selected
      ? theme.palette.secondary.main
      : alpha(theme.palette.secondary.main, 0.2),
  },
  transition: 'all 0.3s ease',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: alpha(theme.palette.background.paper, 0.05),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 24px ${alpha(theme.palette.secondary.main, 0.3)}`,
    borderColor: theme.palette.secondary.main,
  },
}));

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginTop: '12px',
  flexWrap: 'wrap',
  '& .meta-item': {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: alpha(theme.palette.primary.contrastText, 0.7),
    fontSize: '0.9rem',
    '& svg': {
      fontSize: '1rem',
    },
  },
}));

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['Todas', ...getAllCategories()];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      !selectedCategory || selectedCategory === 'Todas' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <BlogContainer>
      <Container maxWidth="lg">
        <BlogHeader>
          <Typography variant="h1">Blog de Tecnologia</Typography>
          <Typography variant="body1">
            Artigos sobre desenvolvimento, arquitetura de software e as últimas tendências em tecnologia
          </Typography>
        </BlogHeader>

        <SearchBox
          fullWidth
          placeholder="Buscar artigos por título, conteúdo ou tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'secondary.main' }} />
              </InputAdornment>
            ),
          }}
        />

        <FilterSection>
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              selected={selectedCategory === category || (category === 'Todas' && !selectedCategory)}
              onClick={() => setSelectedCategory(category === 'Todas' ? null : category)}
            />
          ))}
        </FilterSection>

        <Grid container spacing={3}>
          {filteredPosts.length === 0 ? (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2 }}>
                  Nenhum artigo encontrado
                </Typography>
                <Typography sx={{ color: alpha('#fff', 0.7) }}>
                  Tente ajustar os filtros ou buscar por outros termos
                </Typography>
              </Box>
            </Grid>
          ) : (
            filteredPosts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <StyledCard>
                  <CardActionArea onClick={() => handlePostClick(post.id)} sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          mb: 2,
                          backgroundColor: 'secondary.main',
                          color: 'primary.main',
                          fontWeight: 'bold',
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'primary.contrastText',
                          fontWeight: 'bold',
                          mb: 2,
                          minHeight: '64px',
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#fff', 0.8),
                          mb: 2,
                          minHeight: '60px',
                        }}
                      >
                        {post.excerpt}
                      </Typography>

                      <PostMeta>
                        <Box className="meta-item">
                          <CalendarTodayIcon />
                          <span>
                            {new Date(post.date).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </Box>
                        <Box className="meta-item">
                          <AccessTimeIcon />
                          <span>{post.readTime}</span>
                        </Box>
                      </PostMeta>

                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {post.tags.slice(0, 3).map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: alpha('#fff', 0.1),
                              color: 'primary.contrastText',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </StyledCard>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </BlogContainer>
  );
};

export default Blog;

