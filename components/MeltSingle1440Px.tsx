// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMeltSingle1440Px,
  DefaultMeltSingle1440PxProps
} from "./plasmic/sparq_master_app/PlasmicMeltSingle1440Px";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface MeltSingle1440PxProps extends Omit<DefaultMeltSingle1440PxProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultMeltSingle1440PxProps altogether and have
// total control over the props for your component.
export interface MeltSingle1440PxProps extends DefaultMeltSingle1440PxProps {}

function MeltSingle1440Px_(
  props: MeltSingle1440PxProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicMeltSingle1440Px to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMeltSingle1440Px are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all MeltSingle1440PxProps here, but feel free
  // to do whatever works for you.

  return <PlasmicMeltSingle1440Px div101={{ ref }} {...props} />;
}

const MeltSingle1440Px = React.forwardRef(MeltSingle1440Px_);
export default MeltSingle1440Px;
