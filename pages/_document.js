import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="w-full h-full bg-bg-color">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
