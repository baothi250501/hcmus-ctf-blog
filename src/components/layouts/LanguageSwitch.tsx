import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitch = () => {
  const router = useRouter();
  const { t } = useTranslation(['common']);
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const locale = event.target.value;
    router.push(router.asPath, undefined, { locale });
  };

  return (
    <Select
      size="small"
      labelId="language-switch"
      value={router.locale}
      onChange={handleLanguageChange}
    >
      <MenuItem value="en">
        <Stack direction="row" spacing={1}>
          <div className="relative h-6 w-6">
            <Image src="/static/icons/England.svg" alt="" layout="fill" />
          </div>
          <Typography className='text-neutral-100'>{t('common:i18n.english')}</Typography>
        </Stack>
      </MenuItem>
      <MenuItem value="vi">
        <Stack direction="row" spacing={1}>
          <div className="relative h-6 w-6">
            <Image src="/static/icons/Vietnam.svg" alt="" layout="fill" />
          </div>
          <Typography className='text-neutral-100'>{t('common:i18n.vietnamese')}</Typography>
        </Stack>
      </MenuItem>
    </Select>
  );
};

export default LanguageSwitch;
