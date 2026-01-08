import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

type Props = TooltipProps & {
  margin?: number;
  isSuccess?: boolean;
};

export const Tooltip = ({
  children,
  margin = -15,
  isSuccess,
  ...props
}: Props) => {
  return (
    <MuiTooltip
      placement='top'
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, margin],
              },
            },
          ],
        },
        tooltip: isSuccess && {
          sx: {
            backgroundColor: ({ palette }) => palette.success.main,
          },
        },
      }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};
