// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: 5JFuhXvHv8

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
import sty from "./PlasmicSubscriptionImageText414Px.module.css"; // plasmic-import: 5JFuhXvHv8/css

export type PlasmicSubscriptionImageText414Px__VariantMembers = {};
export type PlasmicSubscriptionImageText414Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicSubscriptionImageText414Px__VariantsArgs;
export const PlasmicSubscriptionImageText414Px__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSubscriptionImageText414Px__ArgsType = {};
type ArgPropType = keyof PlasmicSubscriptionImageText414Px__ArgsType;
export const PlasmicSubscriptionImageText414Px__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSubscriptionImageText414Px__OverridesType = {
  a6?: p.Flex<"div">;
  productSecBan1Jpg?: p.Flex<"a"> & Partial<LinkProps>;
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultSubscriptionImageText414PxProps {
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

function PlasmicSubscriptionImageText414Px__RenderFunc(props: {
  variants: PlasmicSubscriptionImageText414Px__VariantsArgs;
  args: PlasmicSubscriptionImageText414Px__ArgsType;
  overrides: PlasmicSubscriptionImageText414Px__OverridesType;
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
      data-plasmic-name={"a6"}
      data-plasmic-override={overrides.a6}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.a6
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"productSecBan1Jpg"}
        data-plasmic-override={overrides.productSecBan1Jpg}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.productSecBan1Jpg
        )}
        component={Link}
        href={
          "https://shop.lifehacksplus.com/discount/QUIT15?redirect=/pages/subscription" as const
        }
        platform={"nextjs"}
      />

      <div
        data-plasmic-name={"lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans"}
        data-plasmic-override={
          overrides.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans
        }
        className={classNames(
          projectcss.all,
          sty.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans
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
  a6: [
    "a6",
    "productSecBan1Jpg",
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans",
    "text"
  ],
  productSecBan1Jpg: ["productSecBan1Jpg"],
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans: [
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans",
    "text"
  ],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  a6: "div";
  productSecBan1Jpg: "a";
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSubscriptionImageText414Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubscriptionImageText414Px__VariantsArgs;
    args?: PlasmicSubscriptionImageText414Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSubscriptionImageText414Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSubscriptionImageText414Px__ArgsType,
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
          internalArgPropNames: PlasmicSubscriptionImageText414Px__ArgProps,
          internalVariantPropNames:
            PlasmicSubscriptionImageText414Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubscriptionImageText414Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "a6") {
    func.displayName = "PlasmicSubscriptionImageText414Px";
  } else {
    func.displayName = `PlasmicSubscriptionImageText414Px.${nodeName}`;
  }
  return func;
}

export const PlasmicSubscriptionImageText414Px = Object.assign(
  // Top-level PlasmicSubscriptionImageText414Px renders the root element
  makeNodeComponent("a6"),
  {
    // Helper components rendering sub-elements
    productSecBan1Jpg: makeNodeComponent("productSecBan1Jpg"),
    lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans: makeNodeComponent(
      "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans"
    ),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSubscriptionImageText414Px
    internalVariantProps: PlasmicSubscriptionImageText414Px__VariantProps,
    internalArgProps: PlasmicSubscriptionImageText414Px__ArgProps
  }
);

export default PlasmicSubscriptionImageText414Px;
/* prettier-ignore-end */
