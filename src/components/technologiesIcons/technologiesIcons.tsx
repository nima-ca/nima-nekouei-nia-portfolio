import Image from "next/image";
import { FC } from "react";

import dockerIcon from "@img/docker.svg";
import golangIcon from "@img/go.svg";
import graphqlIcon from "@img/graphql.svg";
import javascriptIcon from "@img/javascript.svg";
import jestIcon from "@img/jest.svg";
import materialIcon from "@img/materialUi.svg";
import nestIcon from "@img/nest.svg";
import nextIcon from "@img/next.svg";
import reactQueryIcon from "@img/react-query.svg";
import reactIcon from "@img/react.svg";
import sassIcon from "@img/sass.svg";
import tailwindIcon from "@img/tailwind.svg";
import typescriptIcon from "@img/typescript.svg";
import { Link } from "@nextui-org/react";

interface TechnologiesIconsProps {}

const TechnologiesIcons: FC<TechnologiesIconsProps> = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={javascriptIcon} alt="Javascript Icon" />
            </Link>
            <Link
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={typescriptIcon} alt="Typescript Icon" />
            </Link>
            <Link
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={reactIcon} alt="React Icon" />
            </Link>
            <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={nextIcon} alt="NextJS Icon" />
            </Link>
            <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={tailwindIcon} alt="Docker Icon" />
            </Link>
            <Link
                href="https://nestjs.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={nestIcon} alt="NestJS Icon" />
            </Link>
            <Link
                href="https://tanstack.com/query/latest"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={reactQueryIcon} alt="React Query Icon" />
            </Link>
            <Link
                href="https://go.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={golangIcon} alt="Go Icon" />
            </Link>
            <Link
                href="https://jestjs.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={jestIcon} alt="Jest Icon" />
            </Link>
            <Link
                href="https://www.docker.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={dockerIcon} alt="Docker Icon" />
            </Link>
            <Link
                href="https://graphql.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={graphqlIcon} alt="GraphQL Icon" />
            </Link>
            <Link
                href="https://mui.com/material-ui"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={materialIcon} alt="MUI Icon" />
            </Link>
            <Link
                href="https://sass-lang.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={sassIcon} alt="Sass Icon" />
            </Link>
        </div>
    );
};

export default TechnologiesIcons;
