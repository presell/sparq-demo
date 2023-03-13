// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: QhJ17l5Yhs
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
import ArticleNav from "../../ArticleNav"; // plasmic-import: 19Otlemsjn/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./PlasmicOffer.module.css"; // plasmic-import: QhJ17l5Yhs/css

export type PlasmicOffer__VariantMembers = {};
export type PlasmicOffer__VariantsArgs = {};
type VariantPropType = keyof PlasmicOffer__VariantsArgs;
export const PlasmicOffer__VariantProps = new Array<VariantPropType>();

export type PlasmicOffer__ArgsType = {};
type ArgPropType = keyof PlasmicOffer__ArgsType;
export const PlasmicOffer__ArgProps = new Array<ArgPropType>();

export type PlasmicOffer__OverridesType = {
  root?: p.Flex<"div">;
  articleNav?: p.Flex<typeof ArticleNav>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultOfferProps {}

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

function PlasmicOffer__RenderFunc(props: {
  variants: PlasmicOffer__VariantsArgs;
  args: PlasmicOffer__ArgsType;
  overrides: PlasmicOffer__OverridesType;

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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <ArticleNav
            data-plasmic-name={"articleNav"}
            data-plasmic-override={overrides.articleNav}
            className={classNames("__wab_instance", sty.articleNav)}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "articleNav", "freeBox"],
  articleNav: ["articleNav"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  articleNav: typeof ArticleNav;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOffer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOffer__VariantsArgs;
    args?: PlasmicOffer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOffer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOffer__ArgsType,
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
          internalArgPropNames: PlasmicOffer__ArgProps,
          internalVariantPropNames: PlasmicOffer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOffer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOffer";
  } else {
    func.displayName = `PlasmicOffer.${nodeName}`;
  }
  return func;
}

export const PlasmicOffer = Object.assign(
  // Top-level PlasmicOffer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    articleNav: makeNodeComponent("articleNav"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicOffer
    internalVariantProps: PlasmicOffer__VariantProps,
    internalArgProps: PlasmicOffer__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicOffer;
/* prettier-ignore-end */
