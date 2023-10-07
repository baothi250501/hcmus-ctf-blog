import { HomeProps } from '@/pages/index';
import { useTranslation } from 'next-i18next';
import { homeConfig } from './homeConfig';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';
import Container from '@/components/layouts/Container';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import CurvedNavBar from '@/components/bottomNavBar/PostViewer';
import PostViewer from '@/components/bottomNavBar/PostViewer';
export default function HomePage({ isSsrMobile }: HomeProps) {
  const comments = [
    { username: 'Thi Nguyễn', content: 'Wow, sự kiện này hay quá!' },
    { username: 'Vi Nguyễn', content: 'Phải tham gia thôi!' },
  ];
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  const isMobile = useIsMobile();
  return (
    <Container>
      {/* <CurvedNavBar/> */}
      <PostViewer
        username="Uyên Lê"
        avatar="https://via.placeholder.com/50x50"
        comments={comments}
      />
      <main>
        {/* {courses && courses.data.length > 0 ? (
          <>
            {courses.meta.pagination.pageCount > 1 ? (
              <Stack spacing={2} mt={4} alignItems="center">
                <Pagination
                  count={courses?.meta.pagination.pageCount}
                  onChange={(_, page) => handleChange(page)}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            ) : null}
          </>
        ) : null} */}
      </main>
    </Container>
  );
}
