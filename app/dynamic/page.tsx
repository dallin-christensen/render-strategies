import { dateAndTime } from '@/lib/utils';
import React from 'react';
import { TimeAndDate } from '@/components/ui/TimeAndDate';
import { TypographyH1 } from '@/components/ui/TypographyH1';
import { TypographyP } from '@/components/ui/TypographyP';

export const dynamic = 'force-dynamic'; // This forces the page to be dynamic

const DynamicPage: React.FC = () => {
  const [time, date] = dateAndTime();
  return (
    <>
      <TypographyH1>Dynamic Rendering</TypographyH1>
      <TypographyP>This page is an example of dynamic rendering, formerly referred to as Server-Side Rendering (SSR). The HTML is generated on every request, meaning the content updates each time the page is loaded.</TypographyP>
      <TypographyP>Check the date and time below, then refresh the page. You’ll notice the content always updates—because the HTML is regenerated on each request.</TypographyP>
      <TimeAndDate time={time} date={date} />
    </>
  );
};

export default DynamicPage;