import React, { type ReactNode } from "react";
import { BLOCKS, INLINES, type Block, type Inline } from "@contentful/rich-text-types";
import { renderRichText, type RenderRichTextData, type ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text";

export type RenderComponentsFn = (
  contentType?: string,
  fields?: Record<string, any>
) => ReactNode;

interface RichTextProps<T extends ContentfulRichTextGatsbyReference = ContentfulRichTextGatsbyReference> {
  data: RenderRichTextData<T>;
  className?: string;
  listClassName?: string;
  renderComponents?: RenderComponentsFn;
}

export const RichText = <T extends ContentfulRichTextGatsbyReference = ContentfulRichTextGatsbyReference>({
  data,
  className,
  listClassName,
  renderComponents,
}: RichTextProps<T>) => {
  const Text: React.FC<{ children: ReactNode }> = ({ children }) => <p>{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Block, children: ReactNode) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (_node: Block, children: ReactNode) => <ul className={listClassName}>{children}</ul>,
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const contentType = node?.data?.target?.sys?.contentType?.sys?.contentful_id;
        const fields = node?.data?.target?.fields;
        return <p>{renderComponents ? renderComponents(contentType, fields) : ""}</p>;
      },
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        const contentType = node?.data?.target?.sys?.contentType?.sys?.contentful_id;
        const fields = node?.data?.target?.fields;
        return renderComponents ? renderComponents(contentType, fields) : "";
      },
    } as Partial<Record<string, (node: any, children?: ReactNode) => ReactNode>>, // ✅ type hint
    renderText: (text: string) =>
      text.split("\n").flatMap((line, i) => [i > 0 && <br key={i} />, line]),
  };

  return <div className={className}>{renderRichText(data, options as Parameters<typeof renderRichText>[1])}</div>;
};

export default RichText;
