import { TimeAndDate } from '@/components/ui/TimeAndDate';
import { TypographyH1 } from '@/components/ui/TypographyH1';
import { TypographyP } from '@/components/ui/TypographyP';
import { dateAndTime } from '@/lib/utils';



const StaticPage: React.FC = () => {
  const [time, date] = dateAndTime()
  return (
    <>
      <TypographyH1>Static Rendering</TypographyH1>
      <TypographyP>This page is an example of static rendering, formerly known as Static Site Generation (SSG). The HTML was generated at build time, meaning it won’t change until the site is rebuilt and redeployed.</TypographyP>
      <TypographyP>Check the date and time below, then refresh the page. You’ll notice the content stays the same—because the HTML is not regenerated on each request.</TypographyP>
      <TimeAndDate time={time} date={date} />
    </>
  );
};

export default StaticPage;