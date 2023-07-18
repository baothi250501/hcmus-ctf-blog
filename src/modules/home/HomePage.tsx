import { HomeProps } from "@/pages/index";
import { useTranslation } from "next-i18next";
import { homeConfig } from "./homeConfig";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import Container from "@/components/layouts/Container";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
export default function HomePage({isSsrMobile}: HomeProps) {
    const { t } = useTranslation(homeConfig.i18nNamespaces);
    const isMobile = useIsMobile();
    return <Container>
        <main>
        {courses && courses.data.length > 0 ? (
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
        ) : null}
        </main>
    </Container>
}