import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
export enum types__e_entrypoints_types {
    Transfer = "Transfer",
    Transfer_Gasless = "Transfer_Gasless",
    Update_Operators = "Update_Operators",
    Mint = "Mint",
    Burn = "Burn",
    Pause = "Pause",
    UnPause = "UnPause",
    Set_Permits = "Set_Permits",
    Declare_Ownership = "Declare_Ownership",
    Claim_Ownership = "Claim_Ownership",
    Set_MetaData = "Set_MetaData",
    Set_Asset_Protection_Role = "Set_Asset_Protection_Role",
    Set_Token_Metadata = "Set_Token_Metadata",
    Freeze = "Freeze",
    Unfreeze = "Unfreeze"
}
export abstract class types__e_entrypoints extends att.Enum<types__e_entrypoints_types> {
    abstract to_mich(): att.Micheline;
    equals(v: types__e_entrypoints): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
}
export class Transfer extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Transfer);
    }
    to_mich() { return new att.Int(0).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Transfer_Gasless extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Transfer_Gasless);
    }
    to_mich() { return new att.Int(1).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Update_Operators extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Update_Operators);
    }
    to_mich() { return new att.Int(2).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Mint extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Mint);
    }
    to_mich() { return new att.Int(3).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Burn extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Burn);
    }
    to_mich() { return new att.Int(4).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Pause extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Pause);
    }
    to_mich() { return new att.Int(5).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class UnPause extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.UnPause);
    }
    to_mich() { return new att.Int(6).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Permits extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Set_Permits);
    }
    to_mich() { return new att.Int(7).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Declare_Ownership extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Declare_Ownership);
    }
    to_mich() { return new att.Int(8).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Claim_Ownership extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Claim_Ownership);
    }
    to_mich() { return new att.Int(9).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_MetaData extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Set_MetaData);
    }
    to_mich() { return new att.Int(10).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Asset_Protection_Role extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Set_Asset_Protection_Role);
    }
    to_mich() { return new att.Int(11).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Token_Metadata extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Set_Token_Metadata);
    }
    to_mich() { return new att.Int(12).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Freeze extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Freeze);
    }
    to_mich() { return new att.Int(13).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Unfreeze extends types__e_entrypoints {
    constructor() {
        super(types__e_entrypoints_types.Unfreeze);
    }
    to_mich() { return new att.Int(14).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export enum types__update_op_types {
    add_operator = "add_operator",
    remove_operator = "remove_operator"
}
export abstract class types__update_op extends att.Enum<types__update_op_types> {
    abstract to_mich(): att.Micheline;
    equals(v: types__update_op): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
}
export class add_operator extends types__update_op {
    constructor(private content: types__operator_param) {
        super(types__update_op_types.add_operator);
    }
    to_mich() { return att.left_to_mich(this.content.to_mich()); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    get() { return this.content; }
}
export class remove_operator extends types__update_op {
    constructor(private content: types__operator_param) {
        super(types__update_op_types.remove_operator);
    }
    to_mich() { return att.right_to_mich(this.content.to_mich()); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    get() { return this.content; }
}
export const mich_to_types__e_entrypoints = (m: any): types__e_entrypoints => {
    const v = (new att.Nat((m as att.Mint).int)).to_big_number().toNumber();
    switch (v) {
        case 0: return new Transfer();
        case 1: return new Transfer_Gasless();
        case 2: return new Update_Operators();
        case 3: return new Mint();
        case 4: return new Burn();
        case 5: return new Pause();
        case 6: return new UnPause();
        case 7: return new Set_Permits();
        case 8: return new Declare_Ownership();
        case 9: return new Claim_Ownership();
        case 10: return new Set_MetaData();
        case 11: return new Set_Asset_Protection_Role();
        case 12: return new Set_Token_Metadata();
        case 13: return new Freeze();
        case 14: return new Unfreeze();
        default: throw new Error("mich_to_asset_type : invalid value " + v);
    }
};
export const mich_to_types__update_op = (m: att.Micheline): types__update_op => {
    if ((m as att.Msingle).prim == "Left") {
        return new add_operator(types__operator_param.from_mich((m as att.Msingle).args[0]));
    }
    if ((m as att.Msingle).prim == "Right") {
        return new remove_operator(types__operator_param.from_mich((m as att.Msingle).args[0]));
    }
    throw new Error("mich_to_types__update_op : invalid micheline");
};
export class dgr_proxy__exec_param implements att.ArchetypeType {
    constructor(public ep_entrypoint: types__e_entrypoints, public ep_params: att.Bytes) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.ep_entrypoint.to_mich(), this.ep_params.to_mich()]);
    }
    equals(v: dgr_proxy__exec_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): dgr_proxy__exec_param {
        return new dgr_proxy__exec_param(mich_to_types__e_entrypoints((input as att.Mpair).args[0]), att.Bytes.from_mich((input as att.Mpair).args[1]));
    }
}
export class types__Storage implements att.ArchetypeType {
    constructor(public owner: att.Address, public permits: att.Address, public rbac: att.Address, public token_metadata: Array<[
        att.Nat,
        [
            att.Nat,
            Array<[
                string,
                att.Bytes
            ]>
        ]
    ]>, public ledger: Array<[
        [
            att.Address,
            att.Nat
        ],
        att.Nat
    ]>, public operator: Array<[
        [
            att.Address,
            att.Nat,
            att.Address
        ],
        att.Unit
    ]>, public operator_for_all: Array<[
        [
            att.Address,
            att.Address
        ],
        att.Unit
    ]>, public paused: boolean, public owner_candidate: att.Option<att.Address>, public assetProtectionRole: att.Nat, public contract_data: Array<[
        string,
        att.Bytes
    ]>, public frozen_accounts: Array<[
        att.Address,
        att.Nat
    ]>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.owner.to_mich(), this.permits.to_mich(), this.rbac.to_mich(), att.list_to_mich(this.token_metadata, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(x_key.to_mich(), att.pair_to_mich([x_value[0].to_mich(), att.list_to_mich(x_value[1], x => {
                        const x_key = x[0];
                        const x_value = x[1];
                        return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
                    })]));
            }), att.list_to_mich(this.ledger, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.pair_to_mich([x_key[0].to_mich(), x_key[1].to_mich()]), x_value.to_mich());
            }), att.list_to_mich(this.operator, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.pair_to_mich([x_key[0].to_mich(), x_key[1].to_mich(), x_key[2].to_mich()]), att.unit_to_mich());
            }), att.list_to_mich(this.operator_for_all, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.pair_to_mich([x_key[0].to_mich(), x_key[1].to_mich()]), att.unit_to_mich());
            }), att.bool_to_mich(this.paused), this.owner_candidate.to_mich((x => { return x.to_mich(); })), this.assetProtectionRole.to_mich(), att.list_to_mich(this.contract_data, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
            }), att.list_to_mich(this.frozen_accounts, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(x_key.to_mich(), x_value.to_mich());
            })]);
    }
    equals(v: types__Storage): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__Storage {
        return new types__Storage(att.Address.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]), att.Address.from_mich((input as att.Mpair).args[2]), att.Int.from_mich((input as att.Mpair).args[3]), att.Int.from_mich((input as att.Mpair).args[4]), att.Int.from_mich((input as att.Mpair).args[5]), att.Int.from_mich((input as att.Mpair).args[6]), att.mich_to_bool((input as att.Mpair).args[7]), att.Option.from_mich((input as att.Mpair).args[8], x => { return att.Address.from_mich(x); }), att.Nat.from_mich((input as att.Mpair).args[9]), att.Int.from_mich((input as att.Mpair).args[10]), att.Int.from_mich((input as att.Mpair).args[11]));
    }
}
export class types__proxy_execute_param implements att.ArchetypeType {
    constructor(public pe_entrypoint: types__e_entrypoints, public pe_sender: att.Address, public pe_params: att.Bytes, public pe_storage: types__Storage) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.pe_entrypoint.to_mich(), this.pe_sender.to_mich(), this.pe_params.to_mich(), this.pe_storage.to_mich()]);
    }
    equals(v: types__proxy_execute_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__proxy_execute_param {
        return new types__proxy_execute_param(mich_to_types__e_entrypoints((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]), att.Bytes.from_mich((input as att.Mpair).args[2]), types__Storage.from_mich(att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(3, 15))));
    }
}
export class types__transfer_destination implements att.ArchetypeType {
    constructor(public to_dest: att.Address, public token_id_dest: att.Nat, public token_amount_dest: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.to_dest.to_mich(), att.pair_to_mich([this.token_id_dest.to_mich(), this.token_amount_dest.to_mich()])]);
    }
    equals(v: types__transfer_destination): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__transfer_destination {
        return new types__transfer_destination(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[1]));
    }
}
export class types__transfer_param implements att.ArchetypeType {
    constructor(public tp_from: att.Address, public tp_txs: Array<types__transfer_destination>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tp_from.to_mich(), att.list_to_mich(this.tp_txs, x => {
                return x.to_mich();
            })]);
    }
    equals(v: types__transfer_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__transfer_param {
        return new types__transfer_param(att.Address.from_mich((input as att.Mpair).args[0]), att.mich_to_list((input as att.Mpair).args[1], x => { return types__transfer_destination.from_mich(x); }));
    }
}
export class types__gasless_param implements att.ArchetypeType {
    constructor(public transfer_params: Array<types__transfer_param>, public user_pk: att.Key, public user_sig: att.Signature) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.list_to_mich(this.transfer_params, x => {
                return x.to_mich();
            }), this.user_pk.to_mich(), this.user_sig.to_mich()]);
    }
    equals(v: types__gasless_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__gasless_param {
        return new types__gasless_param(att.mich_to_list((input as att.Mpair).args[0], x => { return types__transfer_param.from_mich(x); }), att.Key.from_mich((input as att.Mpair).args[1]), att.Signature.from_mich((input as att.Mpair).args[2]));
    }
}
export class types__balance_of_request implements att.ArchetypeType {
    constructor(public bo_owner: att.Address, public bo_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.bo_owner.to_mich(), this.bo_token_id.to_mich()]);
    }
    equals(v: types__balance_of_request): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__balance_of_request {
        return new types__balance_of_request(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]));
    }
}
export class types__balance_of_response implements att.ArchetypeType {
    constructor(public request: types__balance_of_request, public balance_: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.request.to_mich(), this.balance_.to_mich()]);
    }
    equals(v: types__balance_of_response): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__balance_of_response {
        return new types__balance_of_response(types__balance_of_request.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]));
    }
}
export class types__balance_of_param implements att.ArchetypeType {
    constructor(public requests: Array<types__balance_of_request>, public callback: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.list_to_mich(this.requests, x => {
                return x.to_mich();
            }), this.callback.to_mich()]);
    }
    equals(v: types__balance_of_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__balance_of_param {
        return new types__balance_of_param(att.mich_to_list((input as att.Mpair).args[0], x => { return types__balance_of_request.from_mich(x); }), att.Address.from_mich((input as att.Mpair).args[1]));
    }
}
export class types__operator_param implements att.ArchetypeType {
    constructor(public opp_owner: att.Address, public opp_operator: att.Address, public opp_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.opp_owner.to_mich(), att.pair_to_mich([this.opp_operator.to_mich(), this.opp_token_id.to_mich()])]);
    }
    equals(v: types__operator_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__operator_param {
        return new types__operator_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[1]));
    }
}
export class types__mint_param implements att.ArchetypeType {
    constructor(public mp_to: att.Address, public mp_token_id: att.Nat, public mp_token_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.mp_to.to_mich(), this.mp_token_id.to_mich(), this.mp_token_amount.to_mich()]);
    }
    equals(v: types__mint_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__mint_param {
        return new types__mint_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.Nat.from_mich((input as att.Mpair).args[2]));
    }
}
export class types__burn_param implements att.ArchetypeType {
    constructor(public bp_from: att.Address, public bp_token_id: att.Nat, public bp_token_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.bp_from.to_mich(), this.bp_token_id.to_mich(), this.bp_token_amount.to_mich()]);
    }
    equals(v: types__burn_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__burn_param {
        return new types__burn_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.Nat.from_mich((input as att.Mpair).args[2]));
    }
}
export class types__pause_param implements att.ArchetypeType {
    constructor(public p_paused: boolean) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.bool_to_mich(this.p_paused);
    }
    equals(v: types__pause_param): boolean {
        return this.p_paused == v.p_paused;
    }
    static from_mich(input: att.Micheline): types__pause_param {
        return new types__pause_param(att.mich_to_bool(input));
    }
}
export class types__freez_param implements att.ArchetypeType {
    constructor(public p_address: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_address.to_mich();
    }
    equals(v: types__freez_param): boolean {
        return this.p_address.equals(v.p_address);
    }
    static from_mich(input: att.Micheline): types__freez_param {
        return new types__freez_param(att.Address.from_mich(input));
    }
}
export class types__permits_param implements att.ArchetypeType {
    constructor(public p_permits_addr: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_permits_addr.to_mich();
    }
    equals(v: types__permits_param): boolean {
        return this.p_permits_addr.equals(v.p_permits_addr);
    }
    static from_mich(input: att.Micheline): types__permits_param {
        return new types__permits_param(att.Address.from_mich(input));
    }
}
export class types__ownership_param implements att.ArchetypeType {
    constructor(public p_owner_candidate: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_owner_candidate.to_mich();
    }
    equals(v: types__ownership_param): boolean {
        return this.p_owner_candidate.equals(v.p_owner_candidate);
    }
    static from_mich(input: att.Micheline): types__ownership_param {
        return new types__ownership_param(att.Address.from_mich(input));
    }
}
export class types__contract_data_param implements att.ArchetypeType {
    constructor(public p_key: string, public p_bytes: att.Bytes) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.string_to_mich(this.p_key), this.p_bytes.to_mich()]);
    }
    equals(v: types__contract_data_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__contract_data_param {
        return new types__contract_data_param(att.mich_to_string((input as att.Mpair).args[0]), att.Bytes.from_mich((input as att.Mpair).args[1]));
    }
}
export class types__set_asset_protection_role_param implements att.ArchetypeType {
    constructor(public p_role: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_role.to_mich();
    }
    equals(v: types__set_asset_protection_role_param): boolean {
        return this.p_role.equals(v.p_role);
    }
    static from_mich(input: att.Micheline): types__set_asset_protection_role_param {
        return new types__set_asset_protection_role_param(att.Nat.from_mich(input));
    }
}
export class types__token_metadata_param implements att.ArchetypeType {
    constructor(public ftoken_metadata: att.Nat, public token_id: att.Nat, public token_info: Array<[
        string,
        att.Bytes
    ]>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.ftoken_metadata.to_mich(), this.token_id.to_mich(), att.list_to_mich(this.token_info, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
            })]);
    }
    equals(v: types__token_metadata_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__token_metadata_param {
        return new types__token_metadata_param(att.Nat.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.mich_to_map((input as att.Mpair).args[2], (x, y) => [att.mich_to_string(x), att.Bytes.from_mich(y)]));
    }
}
export class types__update_operator_param implements att.ArchetypeType {
    constructor(public uop_k: [
        att.Address,
        att.Nat,
        att.Address
    ], public uop_diff: att.Option<att.Unit>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.pair_to_mich([this.uop_k[0].to_mich(), this.uop_k[1].to_mich(), this.uop_k[2].to_mich()]), this.uop_diff.to_mich((x => { return att.unit_to_mich(); }))]);
    }
    equals(v: types__update_operator_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__update_operator_param {
        return new types__update_operator_param((p => {
            return [att.Address.from_mich((p as att.Mpair).args[0]), att.Nat.from_mich((p as att.Mpair).args[1]), att.Address.from_mich((p as att.Mpair).args[2])];
        })((input as att.Mpair).args[0]), att.Option.from_mich((input as att.Mpair).args[1], x => { return new att.Unit(); }));
    }
}
export class types__update_ledger_param implements att.ArchetypeType {
    constructor(public ulp_k: [
        att.Address,
        att.Nat
    ], public ulp_diff: att.Int) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.pair_to_mich([this.ulp_k[0].to_mich(), this.ulp_k[1].to_mich()]), this.ulp_diff.to_mich()]);
    }
    equals(v: types__update_ledger_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): types__update_ledger_param {
        return new types__update_ledger_param((p => {
            return [att.Address.from_mich((p as att.Mpair).args[0]), att.Nat.from_mich((p as att.Mpair).args[1])];
        })((input as att.Mpair).args[0]), att.Int.from_mich((input as att.Mpair).args[1]));
    }
}
export const dgr_proxy__exec_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("int", ["%ep_entrypoint"]),
    att.prim_annot_to_mich_type("bytes", ["%ep_params"])
], []);
export const types__Storage_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.prim_annot_to_mich_type("address", ["%permits"]),
    att.prim_annot_to_mich_type("address", ["%rbac"]),
    att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("nat", []), att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", []),
        att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), [])
    ], []), ["%token_metadata"]),
    att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", []),
        att.prim_annot_to_mich_type("nat", [])
    ], []), att.prim_annot_to_mich_type("nat", []), ["%ledger"]),
    att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", []),
        att.prim_annot_to_mich_type("nat", []),
        att.prim_annot_to_mich_type("address", [])
    ], []), att.prim_annot_to_mich_type("unit", []), ["%operator"]),
    att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", []),
        att.prim_annot_to_mich_type("address", [])
    ], []), att.prim_annot_to_mich_type("unit", []), ["%operator_for_all"]),
    att.prim_annot_to_mich_type("bool", ["%paused"]),
    att.option_annot_to_mich_type(att.prim_annot_to_mich_type("address", []), ["%owner_candidate"]),
    att.prim_annot_to_mich_type("nat", ["%assetProtectionRole"]),
    att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%contract_data"]),
    att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("address", []), att.prim_annot_to_mich_type("nat", []), ["%frozen_accounts"])
], []);
export const types__proxy_execute_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("int", ["%pe_entrypoint"]),
    att.prim_annot_to_mich_type("address", ["%pe_sender"]),
    att.prim_annot_to_mich_type("bytes", ["%pe_params"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("address", ["%permits"]),
        att.prim_annot_to_mich_type("address", ["%rbac"]),
        att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("nat", []), att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", []),
            att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), [])
        ], []), ["%token_metadata"]),
        att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("address", []),
            att.prim_annot_to_mich_type("nat", [])
        ], []), att.prim_annot_to_mich_type("nat", []), ["%ledger"]),
        att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("address", []),
            att.prim_annot_to_mich_type("nat", []),
            att.prim_annot_to_mich_type("address", [])
        ], []), att.prim_annot_to_mich_type("unit", []), ["%operator"]),
        att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("address", []),
            att.prim_annot_to_mich_type("address", [])
        ], []), att.prim_annot_to_mich_type("unit", []), ["%operator_for_all"]),
        att.prim_annot_to_mich_type("bool", ["%paused"]),
        att.option_annot_to_mich_type(att.prim_annot_to_mich_type("address", []), ["%owner_candidate"]),
        att.prim_annot_to_mich_type("nat", ["%assetProtectionRole"]),
        att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%contract_data"]),
        att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("address", []), att.prim_annot_to_mich_type("nat", []), ["%frozen_accounts"])
    ], ["%pe_storage"])
], []);
export const types__transfer_destination_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%to_"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%token_id"]),
        att.prim_annot_to_mich_type("nat", ["%amount"])
    ], [])
], []);
export const types__transfer_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%from_"]),
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%to_"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%amount"])
        ], [])
    ], []), ["%txs"])
], []);
export const types__gasless_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%from_"]),
        att.list_annot_to_mich_type(att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("address", ["%to_"]),
            att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("nat", ["%token_id"]),
                att.prim_annot_to_mich_type("nat", ["%amount"])
            ], [])
        ], []), ["%txs"])
    ], []), ["%transfer_params"]),
    att.prim_annot_to_mich_type("key", ["%user_pk"]),
    att.prim_annot_to_mich_type("signature", ["%user_sig"])
], []);
export const types__balance_of_request_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.prim_annot_to_mich_type("nat", ["%token_id"])
], []);
export const types__balance_of_response_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], ["%request"]),
    att.prim_annot_to_mich_type("nat", ["%balance"])
], []);
export const types__balance_of_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], []), ["%request"]),
    att.prim_annot_to_mich_type("address", ["%callback"])
], []);
export const types__operator_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%operator"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], [])
], []);
export const types__mint_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%mp_to"]),
    att.prim_annot_to_mich_type("nat", ["%mp_token_id"]),
    att.prim_annot_to_mich_type("nat", ["%mp_token_amount"])
], []);
export const types__burn_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%bp_from"]),
    att.prim_annot_to_mich_type("nat", ["%bp_token_id"]),
    att.prim_annot_to_mich_type("nat", ["%bp_token_amount"])
], []);
export const types__pause_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("bool", []);
export const types__freez_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const types__permits_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const types__ownership_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const types__contract_data_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%p_key"]),
    att.prim_annot_to_mich_type("bytes", ["%p_bytes"])
], []);
export const types__set_asset_protection_role_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const types__token_metadata_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%ftoken_metadata"]),
    att.prim_annot_to_mich_type("nat", ["%token_id"]),
    att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%token_info"])
], []);
export const types__update_operator_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", []),
        att.prim_annot_to_mich_type("nat", []),
        att.prim_annot_to_mich_type("address", [])
    ], ["%uop_k"]),
    att.option_annot_to_mich_type(att.prim_annot_to_mich_type("unit", []), ["%uop_diff"])
], []);
export const types__update_ledger_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", []),
        att.prim_annot_to_mich_type("nat", [])
    ], ["%ulp_k"]),
    att.prim_annot_to_mich_type("int", ["%ulp_diff"])
], []);
const do_transfer_arg_to_mich = (txs: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        att.list_to_mich(txs, x => {
            return x.to_mich();
        }),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const transfer_arg_to_mich = (sender: att.Address, p: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        att.list_to_mich(p, x => {
            return x.to_mich();
        }),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const update_operators_arg_to_mich = (sender: att.Address, p: Array<types__update_op>, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        att.list_to_mich(p, x => {
            return x.to_mich();
        }),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const mint_arg_to_mich = (sender: att.Address, p: types__mint_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const burn_arg_to_mich = (sender: att.Address, p: types__burn_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const pause_arg_to_mich = (sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const unpause_arg_to_mich = (sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const transfer_gasless_arg_to_mich = (p: Array<types__gasless_param>, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        att.list_to_mich(p, x => {
            return x.to_mich();
        }),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const set_permits_arg_to_mich = (sender: att.Address, p: types__permits_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const declare_ownership_arg_to_mich = (sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const claim_ownership_arg_to_mich = (sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const set_metadata_arg_to_mich = (sender: att.Address, p: types__contract_data_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const set_asset_protection_role_arg_to_mich = (sender: att.Address, p: types__set_asset_protection_role_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const set_token_metadata_arg_to_mich = (sender: att.Address, p: types__token_metadata_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const freeze_arg_to_mich = (sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const unfreeze_arg_to_mich = (sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address): att.Micheline => {
    return att.pair_to_mich([
        sender.to_mich(),
        p.to_mich(),
        s.to_mich(),
        proxy_address.to_mich()
    ]);
}
const default_arg_to_mich = (p: types__proxy_execute_param): att.Micheline => {
    return p.to_mich();
}
export class Dgr {
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
        const address = (await ex.deploy("./contracts/dgr.arl", {
            owner: owner.to_mich()
        }, params)).address;
        this.address = address;
    }
    async do_transfer(txs: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "do_transfer", do_transfer_arg_to_mich(txs, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async transfer(sender: att.Address, p: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "transfer", transfer_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_operators(sender: att.Address, p: Array<types__update_op>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_operators", update_operators_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async mint(sender: att.Address, p: types__mint_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "mint", mint_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async burn(sender: att.Address, p: types__burn_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "burn", burn_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async pause(sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "pause", pause_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async unpause(sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unpause", unpause_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async transfer_gasless(p: Array<types__gasless_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "transfer_gasless", transfer_gasless_arg_to_mich(p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_permits(sender: att.Address, p: types__permits_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_permits", set_permits_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async declare_ownership(sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "declare_ownership", declare_ownership_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async claim_ownership(sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "claim_ownership", claim_ownership_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_metadata(sender: att.Address, p: types__contract_data_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_metadata", set_metadata_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_asset_protection_role(sender: att.Address, p: types__set_asset_protection_role_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_asset_protection_role", set_asset_protection_role_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_token_metadata(sender: att.Address, p: types__token_metadata_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async freeze(sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "freeze", freeze_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async unfreeze(sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unfreeze", unfreeze_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async default(p: types__proxy_execute_param, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "default", default_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_do_transfer_param(txs: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "do_transfer", do_transfer_arg_to_mich(txs, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_transfer_param(sender: att.Address, p: Array<types__transfer_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "transfer", transfer_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_operators_param(sender: att.Address, p: Array<types__update_op>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_operators", update_operators_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_mint_param(sender: att.Address, p: types__mint_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "mint", mint_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_burn_param(sender: att.Address, p: types__burn_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "burn", burn_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_pause_param(sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "pause", pause_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unpause_param(sender: att.Address, p: types__pause_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unpause", unpause_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_transfer_gasless_param(p: Array<types__gasless_param>, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "transfer_gasless", transfer_gasless_arg_to_mich(p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_permits_param(sender: att.Address, p: types__permits_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_permits", set_permits_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_declare_ownership_param(sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "declare_ownership", declare_ownership_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_claim_ownership_param(sender: att.Address, p: types__ownership_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "claim_ownership", claim_ownership_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_metadata_param(sender: att.Address, p: types__contract_data_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_metadata", set_metadata_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_asset_protection_role_param(sender: att.Address, p: types__set_asset_protection_role_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_asset_protection_role", set_asset_protection_role_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_token_metadata_param(sender: att.Address, p: types__token_metadata_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_freeze_param(sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "freeze", freeze_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unfreeze_param(sender: att.Address, p: types__freez_param, s: types__Storage, proxy_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unfreeze", unfreeze_arg_to_mich(sender, p, s, proxy_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_default_param(p: types__proxy_execute_param, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "default", default_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich(storage);
        }
        throw new Error("Contract not initialised");
    }
    errors = {
        UNPACK_FAILED__UNFREEZ_PARAMS: att.string_to_mich("\"UNPACK_FAILED: unfreez params\""),
        UNPACK_FAILED__FREEZ_PARAMS: att.string_to_mich("\"UNPACK_FAILED: freez params\""),
        UNPACK_FAILED__TOKEN_METADATA_PARAMS: att.string_to_mich("\"UNPACK_FAILED: token_metadata params\""),
        UNPACK_FAILED__INVALID_PARAMS: att.string_to_mich("\"UNPACK_FAILED: Invalid params\""),
        UNPACK_FAILED__METADATA_PARAMS: att.string_to_mich("\"UNPACK_FAILED: metadata params\""),
        UNPACK_FAILED__CLAIM_OWNERSHIP_PARAMS: att.string_to_mich("\"UNPACK_FAILED: claim_ownership params\""),
        UNPACK_FAILED__DECLARE_OWNERSHIP_PARAMS: att.string_to_mich("\"UNPACK_FAILED: declare_ownership params\""),
        UNPACK_FAILED__SET_PERMITS_PARAMS: att.string_to_mich("\"UNPACK_FAILED: set_permits params\""),
        UNPACK_FAILED__UNPAUSE_PARAMS: att.string_to_mich("\"UNPACK_FAILED: unpause params\""),
        UNPACK_FAILED__PAUSE_PARAMS: att.string_to_mich("\"UNPACK_FAILED: pause params\""),
        UNPACK_FAILED__BURN_PARAMS: att.string_to_mich("\"UNPACK_FAILED: burn params\""),
        UNPACK_FAILED__MINT_PARAMS: att.string_to_mich("\"UNPACK_FAILED: mint params\""),
        UNPACK_FAILED__UPDATE_OPERATORS_PARAMS: att.string_to_mich("\"UNPACK_FAILED: update_operators params\""),
        UNPACK_FAILED__TRANSFER_GASLESS_PARAMS: att.string_to_mich("\"UNPACK_FAILED: transfer_gasless params\""),
        UNPACK_FAILED__TRANSFER_PARAMS: att.string_to_mich("\"UNPACK_FAILED: transfer params\""),
        unfreez_r1: att.string_to_mich("\"INVALID_CALLER\""),
        NO_FUND_EXPECTED: att.string_to_mich("\"NO_FUND_EXPECTED\""),
        INVALID_CALLER: att.string_to_mich("\"INVALID_CALLER\""),
        freeze_r2: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        freeze_r1: att.string_to_mich("\"INVALID_CALLER\""),
        settokenrole_r1: att.string_to_mich("\"INVALID_CALLER\""),
        setrole_r1: att.string_to_mich("\"INVALID_CALLER\""),
        setmetadata_r2: att.string_to_mich("\"CONTRACT_PAUSED\""),
        setmetadata_r1: att.string_to_mich("\"INVALID_CALLER\""),
        claimownership_r2: att.string_to_mich("\"INVALID_CALLER\""),
        claimownership_r1: att.string_to_mich("\"INVALID_CALLER\""),
        ownership_r1: att.string_to_mich("\"INVALID_CALLER\""),
        sp_r3: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        sp_r2: att.string_to_mich("\"INVALID_CALLER\""),
        sp_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        FROZEN_ACCOUNT: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        SIGNER_NOT_FROM: att.string_to_mich("\"SIGNER_NOT_FROM\""),
        t_r2: att.string_to_mich("\"CONTRACT_PAUSED\""),
        unpausable_r2: att.string_to_mich("\"INVALID_CALLER\""),
        unpausable_r1: att.string_to_mich("\"CONTRACT_NOT_PAUSED\""),
        pausable_r2: att.string_to_mich("\"INVALID_CALLER\""),
        pausable_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        b_r5: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        b_r4: att.string_to_mich("\"FA2_INSUFFICIENT_BALANCE\""),
        b_r3: att.string_to_mich("\"FA2_TOKEN_UNDEFINED\""),
        b_r2: att.string_to_mich("\"CONTRACT_PAUSED\""),
        b_r1: att.string_to_mich("\"INVALID_CALLER\""),
        FA2_INSUFFICIENT_BALANCE: att.string_to_mich("\"FA2_INSUFFICIENT_BALANCE\""),
        m_r3: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        m_r2: att.string_to_mich("\"INVALID_CALLER\""),
        m_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        FA2_NOT_OWNER: att.string_to_mich("\"FA2_NOT_OWNER\""),
        uo_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        trans_r2: att.string_to_mich("\"FROZEN_ACCOUNT\""),
        trans_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        FA2_TOKEN_UNDEFINED: att.string_to_mich("\"FA2_TOKEN_UNDEFINED\""),
        OPTION_IS_NONE: att.string_to_mich("\"OPTION_IS_NONE\""),
        FA2_NOT_OPERATOR: att.string_to_mich("\"FA2_NOT_OPERATOR\"")
    };
}
export const dgr = new Dgr();
