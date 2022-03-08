import { Box, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      Contents licensed under{" "}
      <Link
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target={"_blank"}
      >
        CC BY-NC-SA 4.0
      </Link>
      {". "}
      Made using{" "}
      <Link href="https://nextjs.org/" target={"_blank"}>
        Next.js
      </Link>{" "}
      and{" "}
      <Link href="https://chakra-ui.com/" target={"_blank"}>
        Chakra UI
      </Link>
      {". "}
      Hosted on{" "}
      <Link href="https://vultr.com/" target={"_blank"}>
        Vultr
      </Link>
      {". "}
      <Box>
        &copy; {new Date().getFullYear()} Nashir Jamali. All Rights Reserved.
        Version 1.0
      </Box>
    </Box>
  );
}
