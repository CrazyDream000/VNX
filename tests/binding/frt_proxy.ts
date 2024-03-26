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
export class exec_param implements att.ArchetypeType {
    constructor(public ep_entrypoint: types__e_entrypoints, public ep_params: att.Bytes) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.ep_entrypoint.to_mich(), this.ep_params.to_mich()]);
    }
    equals(v: exec_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): exec_param {
        return new exec_param(mich_to_types__e_entrypoints((input as att.Mpair).args[0]), att.Bytes.from_mich((input as att.Mpair).args[1]));
    }
}
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
export const exec_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("int", ["%ep_entrypoint"]),
    att.prim_annot_to_mich_type("bytes", ["%ep_params"])
], []);
const set_contract_arg_to_mich = (contract_address: att.Address, contract_type: string): att.Micheline => {
    return att.pair_to_mich([
        contract_address.to_mich(),
        att.string_to_mich(contract_type)
    ]);
}
const set_metadata_arg_to_mich = (k: string, d: att.Bytes): att.Micheline => {
    return att.pair_to_mich([
        att.string_to_mich(k),
        d.to_mich()
    ]);
}
const set_token_metadata_arg_to_mich = (tdata: Array<[
    string,
    att.Bytes
]>): att.Micheline => {
    return att.list_to_mich(tdata, x => {
        const x_key = x[0];
        const x_value = x[1];
        return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
    });
}
const set_permits_arg_to_mich = (p: att.Address): att.Micheline => {
    return p.to_mich();
}
const set_asset_protection_role_arg_to_mich = (p: att.Nat): att.Micheline => {
    return p.to_mich();
}
const declare_ownership_arg_to_mich = (candidate: att.Address): att.Micheline => {
    return candidate.to_mich();
}
const claim_ownership_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const exec_arg_to_mich = (p: exec_param): att.Micheline => {
    return p.to_mich();
}
const apply_storage_arg_to_mich = (p: types__Storage): att.Micheline => {
    return p.to_mich();
}
const update_metadata_arg_to_mich = (k: string, d: att.Bytes): att.Micheline => {
    return att.pair_to_mich([
        att.string_to_mich(k),
        d.to_mich()
    ]);
}
const update_token_metadata_arg_to_mich = (k: att.Nat, v: att.Option<[
    att.Nat,
    Array<[
        string,
        att.Bytes
    ]>
]>): att.Micheline => {
    return att.pair_to_mich([
        k.to_mich(),
        v.to_mich((x => { return att.pair_to_mich([x[0].to_mich(), att.list_to_mich(x[1], x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
            })]); }))
    ]);
}
const update_ledger_arg_to_mich = (updates: Array<types__update_ledger_param>): att.Micheline => {
    return att.list_to_mich(updates, x => {
        return x.to_mich();
    });
}
const update_operator_arg_to_mich = (updates: Array<types__update_operator_param>): att.Micheline => {
    return att.list_to_mich(updates, x => {
        return x.to_mich();
    });
}
const update_operators_arg_to_mich = (upl: Array<types__update_op>): att.Micheline => {
    return att.list_to_mich(upl, x => {
        return x.to_mich();
    });
}
const transfer_arg_to_mich = (txs: Array<types__transfer_param>): att.Micheline => {
    return att.list_to_mich(txs, x => {
        return x.to_mich();
    });
}
const transfer_gasless_arg_to_mich = (batch: Array<types__gasless_param>): att.Micheline => {
    return att.list_to_mich(batch, x => {
        return x.to_mich();
    });
}
const mint_arg_to_mich = (tow: att.Address, nbt: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        tow.to_mich(),
        nbt.to_mich()
    ]);
}
const burn_arg_to_mich = (tow: att.Address, nbt: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        tow.to_mich(),
        nbt.to_mich()
    ]);
}
const pause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const unpause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const freeze_arg_to_mich = (userAddress: att.Address): att.Micheline => {
    return userAddress.to_mich();
}
const unfreeze_arg_to_mich = (userAddress: att.Address): att.Micheline => {
    return userAddress.to_mich();
}
const balance_of_arg_to_mich = (requests: Array<types__balance_of_request>): att.Micheline => {
    return att.list_to_mich(requests, x => {
        return x.to_mich();
    });
}
const view_get_token_metadata_arg_to_mich = (k: att.Nat): att.Micheline => {
    return k.to_mich();
}
const view_get_ledger_arg_to_mich = (k: [
    att.Address,
    att.Nat
]): att.Micheline => {
    return att.pair_to_mich([k[0].to_mich(), k[1].to_mich()]);
}
export const deploy_balance_of_callback = async (params: Partial<ex.Parameters>): Promise<att.DeployResult> => {
    return await ex.deploy_callback("balance_of", att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("address", ["%owner"]),
            att.prim_annot_to_mich_type("nat", ["%token_id"])
        ], ["%request"]),
        att.prim_annot_to_mich_type("nat", ["%balance"])
    ], []), []), params);
};
export class Frt_proxy {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    balance_of_callback_address: string | undefined;
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
    async deploy(owner: att.Address, implementation: att.Address, permits: att.Address, rbac: att.Address, backed_by_currency: string, params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./contracts/frt_proxy.arl", {
            owner: owner.to_mich(),
            implementation: implementation.to_mich(),
            permits: permits.to_mich(),
            rbac: rbac.to_mich(),
            backed_by_currency: att.string_to_mich(backed_by_currency)
        }, params)).address;
        this.address = address;
        this.balance_of_callback_address = (await deploy_balance_of_callback(params)).address;
    }
    async set_contract(contract_address: att.Address, contract_type: string, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_contract", set_contract_arg_to_mich(contract_address, contract_type), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_metadata(k: string, d: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_token_metadata(tdata: Array<[
        string,
        att.Bytes
    ]>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(tdata), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_permits(p: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_permits", set_permits_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_asset_protection_role(p: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_asset_protection_role", set_asset_protection_role_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
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
    async exec(p: exec_param, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "exec", exec_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async apply_storage(p: types__Storage, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "apply_storage", apply_storage_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_metadata(k: string, d: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_metadata", update_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_token_metadata(k: att.Nat, v: att.Option<[
        att.Nat,
        Array<[
            string,
            att.Bytes
        ]>
    ]>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_token_metadata", update_token_metadata_arg_to_mich(k, v), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_ledger(updates: Array<types__update_ledger_param>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_ledger", update_ledger_arg_to_mich(updates), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_operator(updates: Array<types__update_operator_param>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_operator", update_operator_arg_to_mich(updates), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_operators(upl: Array<types__update_op>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_operators", update_operators_arg_to_mich(upl), params);
        }
        throw new Error("Contract not initialised");
    }
    async transfer(txs: Array<types__transfer_param>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "transfer", transfer_arg_to_mich(txs), params);
        }
        throw new Error("Contract not initialised");
    }
    async transfer_gasless(batch: Array<types__gasless_param>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "transfer_gasless", transfer_gasless_arg_to_mich(batch), params);
        }
        throw new Error("Contract not initialised");
    }
    async mint(tow: att.Address, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "mint", mint_arg_to_mich(tow, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async burn(tow: att.Address, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "burn", burn_arg_to_mich(tow, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async pause(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async unpause(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async freeze(userAddress: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "freeze", freeze_arg_to_mich(userAddress), params);
        }
        throw new Error("Contract not initialised");
    }
    async unfreeze(userAddress: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unfreeze", unfreeze_arg_to_mich(userAddress), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_contract_param(contract_address: att.Address, contract_type: string, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_contract", set_contract_arg_to_mich(contract_address, contract_type), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_metadata_param(k: string, d: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_token_metadata_param(tdata: Array<[
        string,
        att.Bytes
    ]>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(tdata), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_permits_param(p: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_permits", set_permits_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_asset_protection_role_param(p: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_asset_protection_role", set_asset_protection_role_arg_to_mich(p), params);
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
    async get_exec_param(p: exec_param, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "exec", exec_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_apply_storage_param(p: types__Storage, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "apply_storage", apply_storage_arg_to_mich(p), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_metadata_param(k: string, d: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_metadata", update_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_token_metadata_param(k: att.Nat, v: att.Option<[
        att.Nat,
        Array<[
            string,
            att.Bytes
        ]>
    ]>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_token_metadata", update_token_metadata_arg_to_mich(k, v), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_ledger_param(updates: Array<types__update_ledger_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_ledger", update_ledger_arg_to_mich(updates), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_operator_param(updates: Array<types__update_operator_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_operator", update_operator_arg_to_mich(updates), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_operators_param(upl: Array<types__update_op>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_operators", update_operators_arg_to_mich(upl), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_transfer_param(txs: Array<types__transfer_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "transfer", transfer_arg_to_mich(txs), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_transfer_gasless_param(batch: Array<types__gasless_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "transfer_gasless", transfer_gasless_arg_to_mich(batch), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_mint_param(tow: att.Address, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "mint", mint_arg_to_mich(tow, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_burn_param(tow: att.Address, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "burn", burn_arg_to_mich(tow, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_pause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unpause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_freeze_param(userAddress: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "freeze", freeze_arg_to_mich(userAddress), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unfreeze_param(userAddress: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unfreeze", unfreeze_arg_to_mich(userAddress), params);
        }
        throw new Error("Contract not initialised");
    }
    async balance_of(requests: Array<types__balance_of_request>, params: Partial<ex.Parameters>): Promise<Array<types__balance_of_response>> {
        if (this.address != undefined) {
            if (this.balance_of_callback_address != undefined) {
                const entrypoint = new att.Entrypoint(new att.Address(this.balance_of_callback_address), "callback");
                await ex.call(this.address, "balance_of", att.getter_args_to_mich(balance_of_arg_to_mich(requests), entrypoint), params);
                return await ex.get_callback_value<Array<types__balance_of_response>>(this.balance_of_callback_address, x => { return att.mich_to_list(x, x => { return types__balance_of_response.from_mich(x); }); });
            }
        }
        throw new Error("Contract not initialised");
    }
    async view_get_token_metadata(k: att.Nat, params: Partial<ex.Parameters>): Promise<att.Option<[
        att.Nat,
        Array<[
            string,
            att.Bytes
        ]>
    ]> | undefined> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "get_token_metadata", view_get_token_metadata_arg_to_mich(k), params);
            return mich.value ? att.Option.from_mich(mich.value, x => { return (p => {
                return [att.Nat.from_mich((p as att.Mpair).args[0]), att.mich_to_map((p as att.Mpair).args[1], (x, y) => [att.mich_to_string(x), att.Bytes.from_mich(y)])];
            })(x); }) : undefined;
        }
        throw new Error("Contract not initialised");
    }
    async view_get_ledger(k: [
        att.Address,
        att.Nat
    ], params: Partial<ex.Parameters>): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "get_ledger", view_get_ledger_arg_to_mich(k), params);
            return mich.value ? att.Nat.from_mich(mich.value) : undefined;
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
    async get_implementation(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[1]);
        }
        throw new Error("Contract not initialised");
    }
    async get_permits(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[2]);
        }
        throw new Error("Contract not initialised");
    }
    async get_rbac(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[3]);
        }
        throw new Error("Contract not initialised");
    }
    async get_backed_by_currency(): Promise<string> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_string((storage as att.Mpair).args[4]);
        }
        throw new Error("Contract not initialised");
    }
    async get_token_metadata_value(key: att.Nat): Promise<[
        att.Nat,
        Array<[
            string,
            att.Bytes
        ]>
    ] | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[5]).toString()), key.to_mich(), att.prim_annot_to_mich_type("nat", []));
            if (data != undefined) {
                return (p => {
                    return [att.Nat.from_mich((p as att.Mpair).args[0]), att.mich_to_map((p as att.Mpair).args[1], (x, y) => [att.mich_to_string(x), att.Bytes.from_mich(y)])];
                })(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_token_metadata_value(key: att.Nat): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[5]).toString()), key.to_mich(), att.prim_annot_to_mich_type("nat", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_ledger_value(key: [
        att.Address,
        att.Nat
    ]): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[6]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
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
    async has_ledger_value(key: [
        att.Address,
        att.Nat
    ]): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[6]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
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
    async get_operator_value(key: [
        att.Address,
        att.Nat,
        att.Address
    ]): Promise<att.Unit | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[7]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich(), key[2].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("nat", []),
                att.prim_annot_to_mich_type("address", [])
            ], []));
            if (data != undefined) {
                return new att.Unit();
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_operator_value(key: [
        att.Address,
        att.Nat,
        att.Address
    ]): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[7]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich(), key[2].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("nat", []),
                att.prim_annot_to_mich_type("address", [])
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
    async get_operator_for_all_value(key: [
        att.Address,
        att.Address
    ]): Promise<att.Unit | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[8]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("address", [])
            ], []));
            if (data != undefined) {
                return new att.Unit();
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_operator_for_all_value(key: [
        att.Address,
        att.Address
    ]): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[8]).toString()), att.pair_to_mich([key[0].to_mich(), key[1].to_mich()]), att.pair_array_to_mich_type([
                att.prim_annot_to_mich_type("address", []),
                att.prim_annot_to_mich_type("address", [])
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
    async get_paused(): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_bool((storage as att.Mpair).args[9]);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner_candidate(): Promise<att.Option<att.Address>> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Option.from_mich((storage as att.Mpair).args[10], x => { return att.Address.from_mich(x); });
        }
        throw new Error("Contract not initialised");
    }
    async get_assetProtectionRole(): Promise<att.Nat> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Nat.from_mich((storage as att.Mpair).args[11]);
        }
        throw new Error("Contract not initialised");
    }
    async get_contract_data_value(key: string): Promise<att.Bytes | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[12]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
            if (data != undefined) {
                return att.Bytes.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_contract_data_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[12]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_frozen_accounts_value(key: att.Address): Promise<att.Nat | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[13]).toString()), key.to_mich(), att.prim_annot_to_mich_type("address", []));
            if (data != undefined) {
                return att.Nat.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_frozen_accounts_value(key: att.Address): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[13]).toString()), key.to_mich(), att.prim_annot_to_mich_type("address", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_metadata_value(key: string): Promise<att.Bytes | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[14]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
            if (data != undefined) {
                return att.Bytes.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_metadata_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[14]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
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
        NO_FUND_EXPECTED: att.string_to_mich("\"NO_FUND_EXPECTED\""),
        NO_TRANSFER: att.string_to_mich("\"NO_TRANSFER\""),
        INVALID_CALLER: att.string_to_mich("\"INVALID_CALLER\""),
        FA2_INSUFFICIENT_BALANCE: att.string_to_mich("\"FA2_INSUFFICIENT_BALANCE\"")
    };
}
export const frt_proxy = new Frt_proxy();
