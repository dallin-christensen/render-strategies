type TypographyPProps = {
  children?: React.ReactNode;
}

export function TypographyP({
    children,
}: TypographyPProps) {
  return (
    <p className="text-foreground leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}
