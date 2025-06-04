import { TimeAndDate } from '@/components/ui/TimeAndDate';
import { TypographyH1 } from '@/components/ui/TypographyH1';
import { TypographyP } from '@/components/ui/TypographyP';
import { dateAndTime } from '@/lib/utils';
import React from 'react';

export const revalidate = 20

const DynamicPage: React.FC = () => {
  const [time, date] = dateAndTime()
  return (
    <>
      <TypographyH1>Revalidated Static Rendering</TypographyH1>
      <TypographyP>This page is an example of Incremental Static Regeneration (ISR), now often referred to as revalidated static rendering in the App Router. Like static rendering, the HTML was generated at build time. But unlike static rendering, the content becomes stale after a set interval, and will be regenerated on the next request.</TypographyP>
      <TypographyP>This page is configured to revalidate every 20 seconds. Check the date and time below, then refresh the page. You’ll notice the content stays the same until about 20 seconds have passed—then the next request triggers a regeneration, and you’ll see updated content.</TypographyP>
      <TimeAndDate time={time} date={date} />
    </>
  );
};

export default DynamicPage;