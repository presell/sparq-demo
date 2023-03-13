// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: wzzpfQ8uf0
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsbai21PvFaWEr } from "../sparq/PlasmicGlobalVariant__Screen"; // plasmic-import: BAI21pvFA_wEr/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../sparq/plasmic_sparq.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./Plasmic_320PxNavBar.module.css"; // plasmic-import: wzzpfQ8uf0/css

import Frame4Icon from "../sparq/icons/PlasmicIcon__Frame4"; // plasmic-import: MzLfF0zEslk/icon

export type Plasmic_320PxNavBar__VariantMembers = {};
export type Plasmic_320PxNavBar__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxNavBar__VariantsArgs;
export const Plasmic_320PxNavBar__VariantProps = new Array<VariantPropType>();

export type Plasmic_320PxNavBar__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxNavBar__ArgsType;
export const Plasmic_320PxNavBar__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxNavBar__OverridesType = {
  div229?: p.Flex<"div">;
  svg16?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
};

export interface Default_320PxNavBarProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_320PxNavBar__RenderFunc(props: {
  variants: Plasmic_320PxNavBar__VariantsArgs;
  args: Plasmic_320PxNavBar__ArgsType;
  overrides: Plasmic_320PxNavBar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbai21PvFaWEr()
  });

  return (
    <div
      data-plasmic-name={"div229"}
      data-plasmic-override={overrides.div229}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div229
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"svg16"}
        data-plasmic-override={overrides.svg16}
        className={classNames(projectcss.all, projectcss.a, sty.svg16)}
        component={Link}
        href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
        platform={"nextjs"}
      >
        {(
          hasVariant(globalVariants, "screen", "smallestMobile") ? true : true
        ) ? (
          <Frame4Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        ) : null}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div229: ["div229", "svg16", "svg"],
  svg16: ["svg16", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div229: "div";
  svg16: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxNavBar__VariantsArgs;
    args?: Plasmic_320PxNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxNavBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_320PxNavBar__ArgProps,
          internalVariantPropNames: Plasmic_320PxNavBar__VariantProps
        }),
      [props, nodeName]
    );

    return Plasmic_320PxNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div229") {
    func.displayName = "Plasmic_320PxNavBar";
  } else {
    func.displayName = `Plasmic_320PxNavBar.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxNavBar = Object.assign(
  // Top-level Plasmic_320PxNavBar renders the root element
  makeNodeComponent("div229"),
  {
    // Helper components rendering sub-elements
    svg16: makeNodeComponent("svg16"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for Plasmic_320PxNavBar
    internalVariantProps: Plasmic_320PxNavBar__VariantProps,
    internalArgProps: Plasmic_320PxNavBar__ArgProps
  }
);

export default Plasmic_320PxNavBar;
/* prettier-ignore-end */
