import { Readable } from "node:stream";
import ReactPDF from "@react-pdf/renderer";
import { ResumePdf } from "~/app/resume/pdf";

export const GET = async (req, res) => {
	const pdfStream = await ReactPDF.renderToStream(<ResumePdf />);
	const webStream = Readable.toWeb(new Readable().wrap(pdfStream));
	return new Response(webStream as ReadableStream, {
		headers: { "Content-Type": "application/pdf" },
	});
};
