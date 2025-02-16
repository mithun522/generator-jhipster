/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Lexer, createToken } from 'chevrotain';

const namePattern = /[a-zA-Z_][a-zA-Z_\-\d]*/;
const nameTokenConfig = { name: 'NAME', pattern: namePattern };

const nameToken = createToken(nameTokenConfig);
const keywordTokenConfig = {
  name: 'KEYWORD',
  pattern: Lexer.NA,
  longer_alt: nameToken,
  categories: [nameToken],
};
const keywordToken = createToken(keywordTokenConfig);

const unaryOptionCategoryToken = createToken({ name: 'UNARY_OPTION', pattern: Lexer.NA });
const binaryOptionCategoryToken = createToken({ name: 'BINARY_OPTION', pattern: Lexer.NA });

export { nameToken as NAME };
export { keywordToken as KEYWORD };
export { namePattern };
export { unaryOptionCategoryToken as UNARY_OPTION };
export { binaryOptionCategoryToken as BINARY_OPTION };
