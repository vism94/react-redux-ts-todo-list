import React from 'react';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export default function NavBar(): JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/counter">Counter</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/todos">Todo</BreadcrumbLink>
      </BreadcrumbItem>

    </Breadcrumb>
  );
}
