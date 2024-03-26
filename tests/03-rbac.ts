import { Bytes, Key, MichelineType,Address, Nat, Option, Or, pair_to_mich, Signature, string_to_mich, Entrypoint, Int } from '@completium/archetype-ts-types'
import { blake2b, expect_to_fail, get_account, get_chain_id, pack, set_mockup, set_mockup_now, set_quiet, set_endpoint } from '@completium/experiment-ts'

import { get_packed_transfer_params, get_transfer_permit_data, get_missigned_error, wrong_packed_transfer_params, wrong_sig } from './utils'

const assert = require('assert');

/* Contracts */

import { rbac } from './binding/rbac';
 
/* Accounts ----------------------------------------------------------------- */

const alice = get_account('alice');
const bob = get_account('bob');
const carl = get_account('carl');

/* Endpoint ---------------------------------------------------------------- */

set_mockup()
//set_endpoint("https://ghostnet.ecadinfra.com")

/* Verbose mode ------------------------------------------------------------ */

set_quiet(true);

/* Now --------------------------------------------------------------------- */

const now = new Date("2022-01-01")
set_mockup_now(now)


/* Scenarios --------------------------------------------------------------- */

describe('[RBAC] Contract deployment', async () => {
  it('RBAC contract deployment should succeed', async () => {
    await rbac.deploy(alice.get_address(), { as: alice })
  });
});

describe('[RBAC] RBAC functions', async () => {
  it('Add/Remove Role by owner should succeed', async () => {
    await rbac.addRole(new Nat('1'), {as: alice})
    await rbac.addRole(new Nat('2'), {as: alice})
    await rbac.addBearer(carl.get_address(), new Nat('2'), {as: alice})
    const check_role = await rbac.view_hasRole(carl.get_address(), new Nat('2'), {as: alice})
    await rbac.removeRole(new Nat('1'), {as: alice})
    const roleTrack = await rbac.get_roles_tracker();
    assert(check_role == true && roleTrack.to_number() == 1)
  });

  it('Add Bearer with same role multiple time should fail', async () => {
    await expect_to_fail(async () => {
      await rbac.addBearer(carl.get_address(), new Nat('2'), {as: alice})
    }, rbac.errors.r5);
  });

  it('Add Bearer by non-owner should fail', async () => {
    await expect_to_fail(async () => {
      await rbac.addBearer(carl.get_address(), new Nat('0'), {as: carl})
    }, rbac.errors.INVALID_CALLER);
  });

  it('Remove Bearer for a user should succeed', async () => {
    await rbac.removeBearer(carl.get_address(), new Nat('2'), {as: alice})
    const check_role = await rbac.view_hasRole(carl.get_address(), new Nat('2'), {as: alice})
    assert(check_role == false)
  });

  it('Remove role should succeed', async () => {
    await rbac.addRole(new Nat('300'), {as: alice})
    await rbac.removeRole(new Nat('300'), {as: alice})
    await expect_to_fail(async () => {
      await rbac.addBearer(carl.get_address(), new Nat('300'), {as: alice})
    }, rbac.errors.ROLE_NOT_EXIST);

  });

  it('Add Bearer for removed role should fail', async () => {
    await expect_to_fail(async () => {
      await rbac.addBearer(carl.get_address(), new Nat('300'), {as: carl})
    }, rbac.errors.INVALID_CALLER);
  });

  it('Remove Bearer for non-hold role should fail', async () => {
    await rbac.addRole(new Nat('400'), {as: alice})
    await expect_to_fail(async () => {
      await rbac.removeBearer(carl.get_address(), new Nat('400'), {as: alice})
    }, rbac.errors.r7);
  });

  it('Exceed Max Roles number should fail', async () => {
    await expect_to_fail(async () => {
      for (let index = 3; index < 103; index++) {
        await rbac.addRole(new Nat(index), {as: alice})
      }
    }, rbac.errors.r1)
  });

  it('add/Remove bearers after Max Roles number reached should success', async () => {
    await rbac.addBearer(bob.get_address(), new Nat('100'), {as: alice})
    await rbac.addBearer(carl.get_address(), new Nat('100'), {as: alice})
    await rbac.addBearer(carl.get_address(), new Nat('99'), {as: alice})
    await rbac.addBearer(carl.get_address(), new Nat('98'), {as: alice})
    await rbac.addBearer(carl.get_address(), new Nat('97'), {as: alice})
    await rbac.removeBearer(carl.get_address(), new Nat('99'), {as: alice})
    await rbac.removeBearer(carl.get_address(), new Nat('98'), {as: alice})
    await rbac.removeBearer(bob.get_address(), new Nat('100'), {as: alice})
    const check_role = await rbac.view_hasRole(carl.get_address(), new Nat('100'), {as: alice})
    const bearers_number = await rbac.get_bearers_tracker()
    assert(check_role == true && bearers_number.to_number() == 1)
  });
});
