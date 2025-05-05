import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';

export const config = createConfig({
  ...defaultConfig,

  theme: {
    // Removed defaultConfig.theme as it does not exist

    extend: {
      colors: {
        primary: '#6200ee',
        secondary: '#03dac6',
        background: '#f5f5f5',
        surface: '#ffffff',
        error: '#b00020',
        textPrimary: '#000000',
        textSecondary: '#757575',
      },
      space: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
      },
      fontSizes: {
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
      },
      fontWeights: {
        normal: '400',
        bold: '700',
      },
    },
  },
});
