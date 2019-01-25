/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const RelayFragmentSpecResolver = require('./RelayFragmentSpecResolver');

const {
  getClassicFragment,
  getClassicOperation,
  isClassicFragment,
  isClassicOperation,
} = require('../query/RelayGraphQLTag');
const {createOperationDescriptor} = require('./RelayOperationDescriptor');
const {
  areEqualSelectors,
  getDataIDsFromObject,
  getSelector,
  getSelectorList,
  getSelectorsFromObject,
  getVariablesFromObject,
} = require('./RelaySelector');

import type {
  FragmentMap,
  FragmentSpecResolver,
  RelayContext,
} from './RelayEnvironmentTypes';
import type {Props} from 'relay-runtime';

function createFragmentSpecResolver(
  context: RelayContext,
  containerName: string,
  fragments: FragmentMap,
  props: Props,
  callback?: () => void,
): FragmentSpecResolver {
  return new RelayFragmentSpecResolver(context, fragments, props, callback);
}

/**
 * The classic implementation of the `RelayCore` interface defined in
 * `RelayEnvironmentTypes`.
 */
module.exports = {
  areEqualSelectors,
  createFragmentSpecResolver,
  createOperationDescriptor,
  getDataIDsFromObject,
  getFragment: getClassicFragment,
  getRequest: getClassicOperation,
  getSelector,
  getSelectorList,
  getSelectorsFromObject,
  getVariablesFromObject,
  isFragment: isClassicFragment,
  isRequest: isClassicOperation,
};
