import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
const declare_ownership_arg_to_mich = (candidate: att.Address): att.Micheline => {
    return candidate.to_mich();
}
const claim_ownership_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const addRole_arg_to_mich = (roleId: att.Nat): att.Micheline => {
    return roleId.to_mich();
}
const removeRole_arg_to_mich = (roleId: att.Nat): att.Micheline => {
    return roleId.to_mich();
}
const addBearer_arg_to_mich = (userAddress: att.Address, userRole: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        userAddress.to_mich(),
        userRole.to_mich()
    ]);
}
const removeBearer_arg_to_mich = (userAddress: att.Address, userRole: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        userAddress.to_mich(),
        userRole.to_mich()
    ]);
}
const view_hasRole_arg_to_mich = (userAddress: att.Address, role: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        userAddress.to_mich(),
        role.to_mich()
    ]);
}
export class Rbac {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async deploy(owner: att.Address, params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./contracts/rbac.arl", {
            owner: owner.to_mich()
        }, params)).address;
        this.address = address;
    }
    async declare_ownership(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async claim_ownership(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "claim_ownership", claim_ownership_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async addRole(roleId: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "addRole", addRole_arg_to_mich(roleId), params);
        }
        throw new Error("Contract not initialised");
    }
    async removeRole(roleId: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "removeRole", removeRole_arg_to_mich(roleId), params);
        }
        throw new Error("Contract not initialised");
    }
    async addBearer(userAddress: att.Address, userRole: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "addBearer", addBearer_arg_to_mich(userAddress, userRole), params);
        }
        throw new Error("Contract not initialised");
    }
    async removeBearer(userAddress: att.Address, userRole: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "removeBearer", removeBearer_arg_to_mich(userAddress, userRole), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_declare_ownership_param(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_claim_ownership_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "claim_ownership", claim_ownership_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_addRole_param(roleId: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "addRole", addRole_arg_to_mich(roleId), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_removeRole_param(roleId: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "removeRole", removeRole_arg_to_mich(roleId), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_addBearer_param(userAddress: att.Address, userRole: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "addBearer", addBearer_arg_to_mich(userAddress, userRole), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_removeBearer_param(userAddress: att.Address, userRole: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "removeBearer", removeBearer_arg_to_mich(userAddress, userRole), params);
        }
        throw new Error("Contract not initialised");
    }
    async view_hasRole(userAddress: att.Address, role: att.Nat, params: Partial<ex.Parameters>): Promise<boolean | undefined> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "hasRole", view_hasRole_arg_to_mich(userAddress, role), params);
            return mich.value ? att.mich_to_bool(mich.value) : undefined;
        }
        throw new Error("Contract not initialised");
    }
    async get_owner(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[0]);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner_candidate(): Promise<att.Option<att.Address>> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Option.from_mich((storage as att.Mpair).args[1], x => { return att.Address.from_mich(x); });
        }
        throw new Error("Contract not initialised");
    }
    async get_roles_tracker(): Promise<att.Int> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Int.from_mich((storage as att.Mpair).args[2]);
        }
        throw new Error("Contract not initialised");
    }
    async get_bearers_tracker(): Promise<att.Int> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Int.from_mich((storage as att.Mpair).args[3]);
        }
        throw new Error("Contract not initialised");
    }
    async get_user_roles_value(key: [
        att.Address,
        att.Nat
    ]): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[4]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("nat", [])
            ], []));
            if (data != undefined) {
                return att.Nat.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_user_roles_value(key: [
        att.Address,
        att.Nat
    ]): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[4]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("nat", [])
            ], []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_bearers_value(key: att.Address): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const raw_data = await ex.get_big_map_value(BigInt(att.Int.from_mich((((storage as att.Mpair).args[5] as att.Mpair)?.args)[0]).toString()), key.to_mich(), att.prim_annot_to_mich_type("address", []));
            const data = raw_data ? (raw_data?.args)[1] : undefined;
            if (data != undefined) {
                return att.Nat.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_bearers_value(key: att.Address): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((((storage as att.Mpair).args[5] as att.Mpair)?.args)[0]).toString()), key.to_mich(), att.prim_annot_to_mich_type("address", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_roles_value(key: att.Nat): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const raw_data = await ex.get_big_map_value(BigInt(att.Int.from_mich(((att.pair_to_mich((storage as att.Mpair as att.Mpair).args.slice(6, 9)) as att.Mpair)?.args)[0]).toString()), key.to_mich(), att.prim_annot_to_mich_type("nat", []));
            const data = raw_data ? (raw_data?.args)[1] : undefined;
            if (data != undefined) {
                return att.Nat.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_roles_value(key: att.Nat): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich(((att.pair_to_mich((storage as att.Mpair as att.Mpair).args.slice(6, 9)) as att.Mpair)?.args)[0]).toString()), key.to_mich(), att.prim_annot_to_mich_type("nat", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    errors = {
        r7: att.string_to_mich("\"BEARER_DOES_NOT_HOLD_ROLE\""),
        r6: att.string_to_mich("\"ROLE_NOT_EXIST\""),
        NO_FUND_EXPECTED: att.string_to_mich("\"NO_FUND_EXPECTED\""),
        INVALID_CALLER: att.string_to_mich("\"INVALID_CALLER\""),
        r5: att.string_to_mich("\"BEARER_HOLDS_ROLE\""),
        r4: att.string_to_mich("\"Maximum bearers count has been reached\""),
        r3: att.string_to_mich("\"ROLE_NOT_EXIST\""),
        r2: att.string_to_mich("\"ROLE_NOT_EXIST\""),
        r1: att.string_to_mich("\"Maximum roles count has been reached\""),
        r0: att.string_to_mich("\"ROLE_EXIST\""),
        ownership_r1: att.string_to_mich("\"INVALID_CALLER\""),
        ROLE_NOT_EXIST: att.string_to_mich("\"ROLE_NOT_EXIST\"")
    };
}
export const rbac = new Rbac();
