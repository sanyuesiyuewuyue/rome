/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token, concat} from "@romefrontend/formatter";
import {AnyComment} from "@romefrontend/ast";

export default function CommentBlock(builder: Builder, node: AnyComment): Token {
	// TODO to review this part
	return concat(["<!-- ", node.value, " -->"]);
}
