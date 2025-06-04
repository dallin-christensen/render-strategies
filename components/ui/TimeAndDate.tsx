import React from 'react';

export const dynamic = 'force-dynamic'; // This forces the page to be dynamic

type TimeAndDateProps = {
  time: string;
  date: string;
}

export const TimeAndDate: React.FC<TimeAndDateProps> = ({ time, date }) => {
  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center">
      <p className="text-foreground scroll-m-20 text-2xl font-semibold tracking-tight">{time}</p>
      <p className="text-foreground scroll-m-20 text-2xl font-semibold tracking-tight">{date}</p>
    </div>
  );
}
