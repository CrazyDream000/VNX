import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
export enum e_entrypoints_types {
    Transfer = "Transfer",
    Transfer_Gasless = "Transfer_Gasless",
    Update_Operators = "Update_Operators",
    Balance_Of = "Balance_Of",
    Mint = "Mint",
    Burn = "Burn",
    Pause = "Pause",
    UnPause = "UnPause",
    Set_Permits = "Set_Permits",
    Set_Contract = "Set_Contract",
    Declare_Ownership = "Declare_Ownership",
    Claim_Ownership = "Claim_Ownership",
    Set_MetaData = "Set_MetaData",
    Set_Asset_Protection_Role = "Set_Asset_Protection_Role",
    Set_Token_Metadata = "Set_Token_Metadata",
    Freeze = "Freeze",
    Unfreeze = "Unfreeze"
}
export abstract class e_entrypoints extends att.Enum<e_entrypoints_types> {
    abstract to_mich(): att.Micheline;
    equals(v: e_entrypoints): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
}
export class Transfer extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Transfer);
    }
    to_mich() { return new att.Int(0).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Transfer_Gasless extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Transfer_Gasless);
    }
    to_mich() { return new att.Int(1).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Update_Operators extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Update_Operators);
    }
    to_mich() { return new att.Int(2).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Balance_Of extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Balance_Of);
    }
    to_mich() { return new att.Int(3).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Mint extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Mint);
    }
    to_mich() { return new att.Int(4).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Burn extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Burn);
    }
    to_mich() { return new att.Int(5).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Pause extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Pause);
    }
    to_mich() { return new att.Int(6).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class UnPause extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.UnPause);
    }
    to_mich() { return new att.Int(7).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Permits extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Set_Permits);
    }
    to_mich() { return new att.Int(8).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Contract extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Set_Contract);
    }
    to_mich() { return new att.Int(9).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Declare_Ownership extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Declare_Ownership);
    }
    to_mich() { return new att.Int(10).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Claim_Ownership extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Claim_Ownership);
    }
    to_mich() { return new att.Int(11).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_MetaData extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Set_MetaData);
    }
    to_mich() { return new att.Int(12).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Asset_Protection_Role extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Set_Asset_Protection_Role);
    }
    to_mich() { return new att.Int(13).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Set_Token_Metadata extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Set_Token_Metadata);
    }
    to_mich() { return new att.Int(14).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Freeze extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Freeze);
    }
    to_mich() { return new att.Int(15).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Unfreeze extends e_entrypoints {
    constructor() {
        super(e_entrypoints_types.Unfreeze);
    }
    to_mich() { return new att.Int(16).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export enum update_op_types {
    add_operator = "add_operator",
    remove_operator = "remove_operator"
}
export abstract class update_op extends att.Enum<update_op_types> {
    abstract to_mich(): att.Micheline;
    equals(v: update_op): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
}
export class add_operator extends update_op {
    constructor(private content: operator_param) {
        super(update_op_types.add_operator);
    }
    to_mich() { return att.left_to_mich(this.content.to_mich()); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    get() { return this.content; }
}
export class remove_operator extends update_op {
    constructor(private content: operator_param) {
        super(update_op_types.remove_operator);
    }
    to_mich() { return att.right_to_mich(this.content.to_mich()); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    get() { return this.content; }
}
export const mich_to_e_entrypoints = (m: any): e_entrypoints => {
    const v = (new att.Nat((m as att.Mint).int)).to_big_number().toNumber();
    switch (v) {
        case 0: return new Transfer();
        case 1: return new Transfer_Gasless();
        case 2: return new Update_Operators();
        case 3: return new Balance_Of();
        case 4: return new Mint();
        case 5: return new Burn();
        case 6: return new Pause();
        case 7: return new UnPause();
        case 8: return new Set_Permits();
        case 9: return new Set_Contract();
        case 10: return new Declare_Ownership();
        case 11: return new Claim_Ownership();
        case 12: return new Set_MetaData();
        case 13: return new Set_Asset_Protection_Role();
        case 14: return new Set_Token_Metadata();
        case 15: return new Freeze();
        case 16: return new Unfreeze();
        default: throw new Error("mich_to_asset_type : invalid value " + v);
    }
};
export const mich_to_update_op = (m: att.Micheline): update_op => {
    if ((m as att.Msingle).prim == "Left") {
        return new add_operator(operator_param.from_mich((m as att.Msingle).args[0]));
    }
    if ((m as att.Msingle).prim == "Right") {
        return new remove_operator(operator_param.from_mich((m as att.Msingle).args[0]));
    }
    throw new Error("mich_to_update_op : invalid micheline");
};
export class Storage implements att.ArchetypeType {
    constructor(public owner: att.Address, public permits: att.Address, public rbac: att.Address, public implementation: att.Address, public token_metadata: Array<[
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
        return att.pair_to_mich([this.owner.to_mich(), this.permits.to_mich(), this.rbac.to_mich(), this.implementation.to_mich(), att.list_to_mich(this.token_metadata, x => {
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
    equals(v: Storage): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): Storage {
        return new Storage(att.Address.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]), att.Address.from_mich((input as att.Mpair).args[2]), att.Address.from_mich((input as att.Mpair).args[3]), att.Int.from_mich((input as att.Mpair).args[4]), att.Int.from_mich((input as att.Mpair).args[5]), att.Int.from_mich((input as att.Mpair).args[6]), att.Int.from_mich((input as att.Mpair).args[7]), att.mich_to_bool((input as att.Mpair).args[8]), att.Option.from_mich((input as att.Mpair).args[9], x => { return att.Address.from_mich(x); }), att.Nat.from_mich((input as att.Mpair).args[10]), att.Int.from_mich((input as att.Mpair).args[11]), att.Int.from_mich((input as att.Mpair).args[12]));
    }
}
export class proxy_execute_param implements att.ArchetypeType {
    constructor(public pe_entrypoint: e_entrypoints, public pe_sender: att.Address, public pe_params: att.Bytes, public pe_storage: Storage) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.pe_entrypoint.to_mich(), this.pe_sender.to_mich(), this.pe_params.to_mich(), this.pe_storage.to_mich()]);
    }
    equals(v: proxy_execute_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): proxy_execute_param {
        return new proxy_execute_param(mich_to_e_entrypoints((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]), att.Bytes.from_mich((input as att.Mpair).args[2]), Storage.from_mich(att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(3, 16))));
    }
}
export class transfer_destination implements att.ArchetypeType {
    constructor(public to_dest: att.Address, public token_id_dest: att.Nat, public token_amount_dest: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.to_dest.to_mich(), att.pair_to_mich([this.token_id_dest.to_mich(), this.token_amount_dest.to_mich()])]);
    }
    equals(v: transfer_destination): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): transfer_destination {
        return new transfer_destination(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[1]));
    }
}
export class transfer_param implements att.ArchetypeType {
    constructor(public tp_from: att.Address, public tp_txs: Array<transfer_destination>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tp_from.to_mich(), att.list_to_mich(this.tp_txs, x => {
                return x.to_mich();
            })]);
    }
    equals(v: transfer_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): transfer_param {
        return new transfer_param(att.Address.from_mich((input as att.Mpair).args[0]), att.mich_to_list((input as att.Mpair).args[1], x => { return transfer_destination.from_mich(x); }));
    }
}
export class gasless_param implements att.ArchetypeType {
    constructor(public transfer_params: Array<transfer_param>, public user_pk: att.Key, public user_sig: att.Signature) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.list_to_mich(this.transfer_params, x => {
                return x.to_mich();
            }), this.user_pk.to_mich(), this.user_sig.to_mich()]);
    }
    equals(v: gasless_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): gasless_param {
        return new gasless_param(att.mich_to_list((input as att.Mpair).args[0], x => { return transfer_param.from_mich(x); }), att.Key.from_mich((input as att.Mpair).args[1]), att.Signature.from_mich((input as att.Mpair).args[2]));
    }
}
export class balance_of_request implements att.ArchetypeType {
    constructor(public bo_owner: att.Address, public bo_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.bo_owner.to_mich(), this.bo_token_id.to_mich()]);
    }
    equals(v: balance_of_request): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): balance_of_request {
        return new balance_of_request(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]));
    }
}
export class balance_of_response implements att.ArchetypeType {
    constructor(public request: balance_of_request, public balance_: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.request.to_mich(), this.balance_.to_mich()]);
    }
    equals(v: balance_of_response): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): balance_of_response {
        return new balance_of_response(balance_of_request.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]));
    }
}
export class balance_of_param implements att.ArchetypeType {
    constructor(public requests: Array<balance_of_request>, public callback: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.list_to_mich(this.requests, x => {
                return x.to_mich();
            }), this.callback.to_mich()]);
    }
    equals(v: balance_of_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): balance_of_param {
        return new balance_of_param(att.mich_to_list((input as att.Mpair).args[0], x => { return balance_of_request.from_mich(x); }), att.Address.from_mich((input as att.Mpair).args[1]));
    }
}
export class operator_param implements att.ArchetypeType {
    constructor(public opp_owner: att.Address, public opp_operator: att.Address, public opp_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.opp_owner.to_mich(), att.pair_to_mich([this.opp_operator.to_mich(), this.opp_token_id.to_mich()])]);
    }
    equals(v: operator_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): operator_param {
        return new operator_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[1]));
    }
}
export class mint_param implements att.ArchetypeType {
    constructor(public mp_to: att.Address, public mp_token_id: att.Nat, public mp_token_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.mp_to.to_mich(), this.mp_token_id.to_mich(), this.mp_token_amount.to_mich()]);
    }
    equals(v: mint_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): mint_param {
        return new mint_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.Nat.from_mich((input as att.Mpair).args[2]));
    }
}
export class burn_param implements att.ArchetypeType {
    constructor(public bp_from: att.Address, public bp_token_id: att.Nat, public bp_token_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.bp_from.to_mich(), this.bp_token_id.to_mich(), this.bp_token_amount.to_mich()]);
    }
    equals(v: burn_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): burn_param {
        return new burn_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.Nat.from_mich((input as att.Mpair).args[2]));
    }
}
export class pause_param implements att.ArchetypeType {
    constructor(public p_paused: boolean) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.bool_to_mich(this.p_paused);
    }
    equals(v: pause_param): boolean {
        return this.p_paused == v.p_paused;
    }
    static from_mich(input: att.Micheline): pause_param {
        return new pause_param(att.mich_to_bool(input));
    }
}
export class freez_param implements att.ArchetypeType {
    constructor(public p_address: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_address.to_mich();
    }
    equals(v: freez_param): boolean {
        return this.p_address.equals(v.p_address);
    }
    static from_mich(input: att.Micheline): freez_param {
        return new freez_param(att.Address.from_mich(input));
    }
}
export class permits_param implements att.ArchetypeType {
    constructor(public p_permits_addr: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_permits_addr.to_mich();
    }
    equals(v: permits_param): boolean {
        return this.p_permits_addr.equals(v.p_permits_addr);
    }
    static from_mich(input: att.Micheline): permits_param {
        return new permits_param(att.Address.from_mich(input));
    }
}
export class ownership_param implements att.ArchetypeType {
    constructor(public p_owner_candidate: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_owner_candidate.to_mich();
    }
    equals(v: ownership_param): boolean {
        return this.p_owner_candidate.equals(v.p_owner_candidate);
    }
    static from_mich(input: att.Micheline): ownership_param {
        return new ownership_param(att.Address.from_mich(input));
    }
}
export class contract_data_param implements att.ArchetypeType {
    constructor(public p_key: string, public p_bytes: att.Bytes) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.string_to_mich(this.p_key), this.p_bytes.to_mich()]);
    }
    equals(v: contract_data_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): contract_data_param {
        return new contract_data_param(att.mich_to_string((input as att.Mpair).args[0]), att.Bytes.from_mich((input as att.Mpair).args[1]));
    }
}
export class set_asset_protection_role_param implements att.ArchetypeType {
    constructor(public p_role: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.p_role.to_mich();
    }
    equals(v: set_asset_protection_role_param): boolean {
        return this.p_role.equals(v.p_role);
    }
    static from_mich(input: att.Micheline): set_asset_protection_role_param {
        return new set_asset_protection_role_param(att.Nat.from_mich(input));
    }
}
export class token_metadata_param implements att.ArchetypeType {
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
    equals(v: token_metadata_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): token_metadata_param {
        return new token_metadata_param(att.Nat.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.mich_to_map((input as att.Mpair).args[2], (x, y) => [att.mich_to_string(x), att.Bytes.from_mich(y)]));
    }
}
export class set_contract_address_param implements att.ArchetypeType {
    constructor(public p_new_address: att.Address, public p_name: string) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.p_new_address.to_mich(), att.string_to_mich(this.p_name)]);
    }
    equals(v: set_contract_address_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): set_contract_address_param {
        return new set_contract_address_param(att.Address.from_mich((input as att.Mpair).args[0]), att.mich_to_string((input as att.Mpair).args[1]));
    }
}
export class set_fee_param implements att.ArchetypeType {
    constructor(public p_fee_rate: att.Nat, public p_fee_recipient: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.p_fee_rate.to_mich(), this.p_fee_recipient.to_mich()]);
    }
    equals(v: set_fee_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): set_fee_param {
        return new set_fee_param(att.Nat.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]));
    }
}
export const Storage_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.prim_annot_to_mich_type("address", ["%permits"]),
    att.prim_annot_to_mich_type("address", ["%rbac"]),
    att.prim_annot_to_mich_type("address", ["%implementation"]),
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
export const proxy_execute_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("int", ["%pe_entrypoint"]),
    att.prim_annot_to_mich_type("address", ["%pe_sender"]),
    att.prim_annot_to_mich_type("bytes", ["%pe_params"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("address", ["%permits"]),
        att.prim_annot_to_mich_type("address", ["%rbac"]),
        att.prim_annot_to_mich_type("address", ["%implementation"]),
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
export const transfer_destination_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%to_"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%token_id"]),
        att.prim_annot_to_mich_type("nat", ["%amount"])
    ], [])
], []);
export const transfer_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%from_"]),
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%to_"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%amount"])
        ], [])
    ], []), ["%txs"])
], []);
export const gasless_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
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
export const balance_of_request_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.prim_annot_to_mich_type("nat", ["%token_id"])
], []);
export const balance_of_response_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], ["%request"]),
    att.prim_annot_to_mich_type("nat", ["%balance"])
], []);
export const balance_of_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], []), ["%request"]),
    att.prim_annot_to_mich_type("address", ["%callback"])
], []);
export const operator_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%operator"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], [])
], []);
export const mint_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%mp_to"]),
    att.prim_annot_to_mich_type("nat", ["%mp_token_id"]),
    att.prim_annot_to_mich_type("nat", ["%mp_token_amount"])
], []);
export const burn_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%bp_from"]),
    att.prim_annot_to_mich_type("nat", ["%bp_token_id"]),
    att.prim_annot_to_mich_type("nat", ["%bp_token_amount"])
], []);
export const pause_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("bool", []);
export const freez_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const permits_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const ownership_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const contract_data_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%p_key"]),
    att.prim_annot_to_mich_type("bytes", ["%p_bytes"])
], []);
export const set_asset_protection_role_param_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const token_metadata_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%ftoken_metadata"]),
    att.prim_annot_to_mich_type("nat", ["%token_id"]),
    att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%token_info"])
], []);
export const set_contract_address_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%p_new_address"]),
    att.prim_annot_to_mich_type("string", ["%p_name"])
], []);
export const set_fee_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%p_fee_rate"]),
    att.prim_annot_to_mich_type("address", ["%p_fee_recipient"])
], []);
export class Types {
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
    async deploy(params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./contracts/types.arl", {}, params)).address;
        this.address = address;
    }
    errors = {};
}
export const types = new Types();