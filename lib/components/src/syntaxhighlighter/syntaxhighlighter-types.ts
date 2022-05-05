import type { BuiltInParserName } from 'prettier';
import type { Language } from 'prism-react-renderer';

export type SyntaxHighlighterFormatTypes = boolean | 'dedent' | BuiltInParserName;

export interface SyntaxHighlighterProps {
  language: Language;
  copyable?: boolean;
  bordered?: boolean;
  padded?: boolean;
  format?: SyntaxHighlighterFormatTypes;
  formatter?: (type: SyntaxHighlighterFormatTypes, source: string) => string;
  showLineNumbers?: boolean;
  className?: string;
}
