import { COMPONENT_TYPE, PrimitiveFieldType } from "./ElementType";

import { PrimitiveFieldStructure } from "./PrimitiveFieldStructure";

export type ComponentStructure = {
  id: string;
  type: COMPONENT_TYPE;
  label: string;
  fields: Record<string, ComponentFieldStructure>;
  repeatable?: boolean;
};

type ComponentFieldStructure =
  | ComponentStructure
  | PrimitiveFieldStructure<PrimitiveFieldType>;
