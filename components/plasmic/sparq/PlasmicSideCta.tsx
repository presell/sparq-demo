// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: sdBBiB4Cb3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./PlasmicSideCta.module.css"; // plasmic-import: sdBBiB4Cb3/css

export type PlasmicSideCta__VariantMembers = {};
export type PlasmicSideCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideCta__VariantsArgs;
export const PlasmicSideCta__VariantProps = new Array<VariantPropType>();

export type PlasmicSideCta__ArgsType = {};
type ArgPropType = keyof PlasmicSideCta__ArgsType;
export const PlasmicSideCta__ArgProps = new Array<ArgPropType>();

export type PlasmicSideCta__OverridesType = {
  review4?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultSideCtaProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSideCta__RenderFunc(props: {
  variants: PlasmicSideCta__VariantsArgs;
  args: PlasmicSideCta__ArgsType;
  overrides: PlasmicSideCta__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

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
    <div
      data-plasmic-name={"review4"}
      data-plasmic-override={overrides.review4}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.review4
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"100px" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/sparq/images/starpng2.png",
          fullWidth: 142,
          fullHeight: 21,
          aspectRatio: undefined
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___6Uz0H
        )}
      >
        <React.Fragment>
          <React.Fragment>{"Rated 4.9 Stars By "}</React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700 }}
          >
            {"100,000+"}
          </span>
          <React.Fragment>{" Customers"}</React.Fragment>
        </React.Fragment>
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___0WUs
        )}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700 }}
          >
            {"So What Are You Waiting For?"}
          </span>
        </React.Fragment>
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__vuK8
        )}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700, color: "#FFFFFF" }}
          >
            {
              "Order today and receive a FREE Box of Pods or a Disposable Device!"
            }
          </span>
        </React.Fragment>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  review4: ["review4", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  review4: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideCta__VariantsArgs;
    args?: PlasmicSideCta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSideCta__ArgsType,
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
          internalArgPropNames: PlasmicSideCta__ArgProps,
          internalVariantPropNames: PlasmicSideCta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSideCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "review4") {
    func.displayName = "PlasmicSideCta";
  } else {
    func.displayName = `PlasmicSideCta.${nodeName}`;
  }
  return func;
}

export const PlasmicSideCta = Object.assign(
  // Top-level PlasmicSideCta renders the root element
  makeNodeComponent("review4"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicSideCta
    internalVariantProps: PlasmicSideCta__VariantProps,
    internalArgProps: PlasmicSideCta__ArgProps
  }
);

export default PlasmicSideCta;
/* prettier-ignore-end */
