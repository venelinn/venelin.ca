import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { func, object, string } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichText = ({ data, className, listClassName, renderComponents }) => {
	// eslint-disable-next-line react/prop-types
	const Text = ({ children }) => <p>{children}</p>;

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
			[BLOCKS.UL_LIST]: (node, children) => <ul className={listClassName}>{children}</ul>,
			[BLOCKS.EMBEDDED_ENTRY]: node => {
				const contentType = node?.data?.target?.sys?.contentType?.sys?.contentful_id;
				const fields = node?.data?.target?.fields;
				return <p>{renderComponents ? renderComponents(contentType, fields) : ""}</p>;
			},
			[INLINES.EMBEDDED_ENTRY]: node => {
				const contentType = node?.data?.target?.sys?.contentType?.sys?.contentful_id;
				const fields = node?.data?.target?.fields;
				return renderComponents ? renderComponents(contentType, fields) : "";
			},
		},
		renderText: text => text.split("\n").flatMap((_text, i) => [i > 0 && <br />, _text]),
	};
	return <div className={className}>{documentToReactComponents(data, options)}</div>;
};

RichText.propTypes = {
	className: string,
	listClassName: string,
	data: object.isRequired,
	renderComponents: func,
};

RichText.defaultProps = {
	className: null,
	renderComponents: null,
	listClassName: null,
};
export default RichText;
