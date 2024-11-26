import { Container, SimpleGrid } from '@mantine/core';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

interface MenuItemData {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface MenuGridProps {
  items: MenuItemData[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <Container size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MenuGrid;