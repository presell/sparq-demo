// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: SHXv-rndbh

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
import sty from "./PlasmicReviewCard.module.css"; // plasmic-import: SHXv-rndbh/css

export type PlasmicReviewCard__VariantMembers = {};
export type PlasmicReviewCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicReviewCard__VariantsArgs;
export const PlasmicReviewCard__VariantProps = new Array<VariantPropType>();

export type PlasmicReviewCard__ArgsType = {};
type ArgPropType = keyof PlasmicReviewCard__ArgsType;
export const PlasmicReviewCard__ArgProps = new Array<ArgPropType>();

export type PlasmicReviewCard__OverridesType = {
  review1?: p.Flex<"div">;
};

export interface DefaultReviewCardProps {
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

function PlasmicReviewCard__RenderFunc(props: {
  variants: PlasmicReviewCard__VariantsArgs;
  args: PlasmicReviewCard__ArgsType;
  overrides: PlasmicReviewCard__OverridesType;
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
    true ? (
      <div
        data-plasmic-name={"review1"}
        data-plasmic-override={overrides.review1}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.review1
        )}
      >
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__bKxjm)}
          displayHeight={"100px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100px" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/sparq_master_app/images/sidereview1Png.png",
            fullWidth: 119,
            fullHeight: 119,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dHkfa
          )}
        >
          {"Isaiah S."}
        </div>
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img___9EqxT)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/sparq_master_app/images/starpng2.png",
            fullWidth: 142,
            fullHeight: 21,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ab9ZH
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {"BEST ALTERNATIVE"}
            </span>
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___8LaFv
          )}
        >
          {
            '"I smoked for 12 years and tried to quit several times with no success. Until I came across Vitamin Air. Now not only do I not smoke, I’m doing something healthy in place! Great product, I’ll be a user for life!"'
          }
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  review1: ["review1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  review1: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReviewCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReviewCard__VariantsArgs;
    args?: PlasmicReviewCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReviewCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReviewCard__ArgsType,
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
          internalArgPropNames: PlasmicReviewCard__ArgProps,
          internalVariantPropNames: PlasmicReviewCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "review1") {
    func.displayName = "PlasmicReviewCard";
  } else {
    func.displayName = `PlasmicReviewCard.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewCard = Object.assign(
  // Top-level PlasmicReviewCard renders the root element
  makeNodeComponent("review1"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicReviewCard
    internalVariantProps: PlasmicReviewCard__VariantProps,
    internalArgProps: PlasmicReviewCard__ArgProps
  }
);

export default PlasmicReviewCard;
/* prettier-ignore-end */
