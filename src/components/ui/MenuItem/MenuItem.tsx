import React from 'react';
import { Paper, Text, Box, Transition } from '@mantine/core';
import { LucideIcon } from 'lucide-react';
import { useHover } from '@mantine/hooks';

interface MenuItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  description,
  icon: Icon,
  color,
}) => {
  const { hovered, ref } = useHover();

  return (
    <Paper
      ref={ref}
      shadow="sm"
      p="xl"
      radius="md"
      h={200}
      style={{
        backgroundColor: color,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          transform: hovered ? 'translateY(-1rem)' : 'none',
          transition: 'transform 0.3s ease',
        }}
      >
        <Icon size={48} style={{ marginBottom: '1rem' }} />
        <Text size="lg" fw={600} ta="center">
          {title}
        </Text>
      </Box>

      <Transition
        mounted={hovered}
        transition="slide-up"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => (
          <Box
            style={{
              ...styles,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1rem',
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
            }}
          >
            <Text size="sm" ta="center">
              {description}
            </Text>
          </Box>
        )}
      </Transition>
    </Paper>
  );
};

export default MenuItem;