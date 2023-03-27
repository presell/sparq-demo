// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: 2E1ntgBLbP

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
import sty from "./Plasmic_320XSubscriptionImage.module.css"; // plasmic-import: 2E1ntgBLbP/css

export type Plasmic_320XSubscriptionImage__VariantMembers = {};
export type Plasmic_320XSubscriptionImage__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320XSubscriptionImage__VariantsArgs;
export const Plasmic_320XSubscriptionImage__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_320XSubscriptionImage__ArgsType = {};
type ArgPropType = keyof Plasmic_320XSubscriptionImage__ArgsType;
export const Plasmic_320XSubscriptionImage__ArgProps = new Array<ArgPropType>();

export type Plasmic_320XSubscriptionImage__OverridesType = {
  a20?: p.Flex<"div">;
  productSecBan1Jpg3?: p.Flex<"a"> & Partial<LinkProps>;
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface Default_320XSubscriptionImageProps {
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

function Plasmic_320XSubscriptionImage__RenderFunc(props: {
  variants: Plasmic_320XSubscriptionImage__VariantsArgs;
  args: Plasmic_320XSubscriptionImage__ArgsType;
  overrides: Plasmic_320XSubscriptionImage__OverridesType;
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
      data-plasmic-name={"a20"}
      data-plasmic-override={overrides.a20}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.a20
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"productSecBan1Jpg3"}
        data-plasmic-override={overrides.productSecBan1Jpg3}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.productSecBan1Jpg3
        )}
        component={Link}
        href={
          "https://shop.lifehacksplus.com/discount/QUIT15?redirect=/pages/subscription" as const
        }
        platform={"nextjs"}
      />

      <div
        data-plasmic-name={"lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3"}
        data-plasmic-override={
          overrides.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3
        }
        className={classNames(
          projectcss.all,
          sty.lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3
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
  a20: [
    "a20",
    "productSecBan1Jpg3",
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3",
    "text"
  ],
  productSecBan1Jpg3: ["productSecBan1Jpg3"],
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3: [
    "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3",
    "text"
  ],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  a20: "div";
  productSecBan1Jpg3: "a";
  lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320XSubscriptionImage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320XSubscriptionImage__VariantsArgs;
    args?: Plasmic_320XSubscriptionImage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320XSubscriptionImage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320XSubscriptionImage__ArgsType,
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
          internalArgPropNames: Plasmic_320XSubscriptionImage__ArgProps,
          internalVariantPropNames: Plasmic_320XSubscriptionImage__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320XSubscriptionImage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "a20") {
    func.displayName = "Plasmic_320XSubscriptionImage";
  } else {
    func.displayName = `Plasmic_320XSubscriptionImage.${nodeName}`;
  }
  return func;
}

export const Plasmic_320XSubscriptionImage = Object.assign(
  // Top-level Plasmic_320XSubscriptionImage renders the root element
  makeNodeComponent("a20"),
  {
    // Helper components rendering sub-elements
    productSecBan1Jpg3: makeNodeComponent("productSecBan1Jpg3"),
    lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3: makeNodeComponent(
      "lookingToSaveEvenMoreCheckOutOurMonthlySparqPlans3"
    ),
    text: makeNodeComponent("text"),

    // Metadata about props expected for Plasmic_320XSubscriptionImage
    internalVariantProps: Plasmic_320XSubscriptionImage__VariantProps,
    internalArgProps: Plasmic_320XSubscriptionImage__ArgProps
  }
);

export default Plasmic_320XSubscriptionImage;
/* prettier-ignore-end */
