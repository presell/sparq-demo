// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: -GoP5PMyE7

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq_master_app.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./PlasmicSubscriptionImageTextBanner.module.css"; // plasmic-import: -GoP5PMyE7/css

export type PlasmicSubscriptionImageTextBanner__VariantMembers = {};
export type PlasmicSubscriptionImageTextBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicSubscriptionImageTextBanner__VariantsArgs;
export const PlasmicSubscriptionImageTextBanner__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSubscriptionImageTextBanner__ArgsType = {};
type ArgPropType = keyof PlasmicSubscriptionImageTextBanner__ArgsType;
export const PlasmicSubscriptionImageTextBanner__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSubscriptionImageTextBanner__OverridesType = {
  a14?: p.Flex<"div">;
  productSecBan1Jpg2?: p.Flex<"a"> & Partial<LinkProps>;
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultSubscriptionImageTextBannerProps {
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

function PlasmicSubscriptionImageTextBanner__RenderFunc(props: {
  variants: PlasmicSubscriptionImageTextBanner__VariantsArgs;
  args: PlasmicSubscriptionImageTextBanner__ArgsType;
  overrides: PlasmicSubscriptionImageTextBanner__OverridesType;
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
    <div
      data-plasmic-name={"a14"}
      data-plasmic-override={overrides.a14}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.a14
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"productSecBan1Jpg2"}
        data-plasmic-override={overrides.productSecBan1Jpg2}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.productSecBan1Jpg2
        )}
        component={Link}
        href={
          "https://shop.lifehacksplus.com/discount/QUIT15?redirect=/pages/subscription" as const
        }
        platform={"nextjs"}
      />

      <div
        data-plasmic-name={"lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2"}
        data-plasmic-override={
          overrides.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2
        }
        className={classNames(
          projectcss.all,
          sty.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2
        )}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Looking to save even more?\nCheck out our \nMONTHLY Sparq Plans"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  a14: [
    "a14",
    "productSecBan1Jpg2",
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2",
    "text"
  ],
  productSecBan1Jpg2: ["productSecBan1Jpg2"],
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2: [
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2",
    "text"
  ],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  a14: "div";
  productSecBan1Jpg2: "a";
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSubscriptionImageTextBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubscriptionImageTextBanner__VariantsArgs;
    args?: PlasmicSubscriptionImageTextBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicSubscriptionImageTextBanner__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicSubscriptionImageTextBanner__ArgsType,
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
          internalArgPropNames: PlasmicSubscriptionImageTextBanner__ArgProps,
          internalVariantPropNames:
            PlasmicSubscriptionImageTextBanner__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubscriptionImageTextBanner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "a14") {
    func.displayName = "PlasmicSubscriptionImageTextBanner";
  } else {
    func.displayName = `PlasmicSubscriptionImageTextBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicSubscriptionImageTextBanner = Object.assign(
  // Top-level PlasmicSubscriptionImageTextBanner renders the root element
  makeNodeComponent("a14"),
  {
    // Helper components rendering sub-elements
    productSecBan1Jpg2: makeNodeComponent("productSecBan1Jpg2"),
    lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2: makeNodeComponent(
      "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans2"
    ),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSubscriptionImageTextBanner
    internalVariantProps: PlasmicSubscriptionImageTextBanner__VariantProps,
    internalArgProps: PlasmicSubscriptionImageTextBanner__ArgProps
  }
);

export default PlasmicSubscriptionImageTextBanner;
/* prettier-ignore-end */
