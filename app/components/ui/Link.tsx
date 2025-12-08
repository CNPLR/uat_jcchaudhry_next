import NextLink from "next/link";

type LinkProps = {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  style?: string;
  link: string;
};

export default function Link({ href, target, style, link }: LinkProps) {
  return (
    <div>
      <NextLink
        href={href}
        target={target}
        className={`hover:underline underline-offset-8 cursor-pointer ${style || ""}`}
      >
        {link}
      </NextLink>
    </div>
  );
}
