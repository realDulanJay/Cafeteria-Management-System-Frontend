(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "/sgR":
/*!***************************************************************************!*\
  !*** ./src/app/material-component/manage-order/manage-order.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrderComponent", function() { return ManageOrderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/bill.service */ "ZRiD");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





















function ManageOrderComponent_mat_error_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_18_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_18_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors.pattern);
} }
function ManageOrderComponent_mat_error_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_23_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_23_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors.pattern);
} }
function ManageOrderComponent_mat_error_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_28_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_28_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors.pattern);
} }
function ManageOrderComponent_mat_error_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_39_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_39_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.manageOrderForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.manageOrderForm.controls.email.errors.pattern);
} }
function ManageOrderComponent_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r32.name);
} }
function ManageOrderComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", product_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r33.name);
} }
function ManageOrderComponent_mat_error_62_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_62_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_62_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_62_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.manageOrderForm.controls.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.manageOrderForm.controls.price.errors.pattern);
} }
function ManageOrderComponent_mat_error_68_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_68_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_68_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_68_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.manageOrderForm.controls.quantity.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.manageOrderForm.controls.quantity.errors.pattern);
} }
function ManageOrderComponent_mat_error_73_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_73_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageOrderComponent_mat_error_73_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManageOrderComponent_mat_error_73_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.manageOrderForm.controls.total.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.manageOrderForm.controls.total.errors.pattern);
} }
function ManageOrderComponent_th_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r40.name);
} }
function ManageOrderComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r41.category);
} }
function ManageOrderComponent_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r42.price);
} }
function ManageOrderComponent_th_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r43.quantity);
} }
function ManageOrderComponent_th_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r44.total);
} }
function ManageOrderComponent_th_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_td_99_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageOrderComponent_td_99_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const i_r46 = ctx.index; const element_r45 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r47.handleDeleteAction(i_r46, element_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageOrderComponent_tr_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 40);
} }
function ManageOrderComponent_tr_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 41);
} }
class ManageOrderComponent {
    constructor(formBuilder, categoryService, productService, snackbarService, billService, ngxService) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.productService = productService;
        this.snackbarService = snackbarService;
        this.billService = billService;
        this.ngxService = ngxService;
        this.displayedColumns = [
            'name',
            'category',
            'price',
            'quantity',
            'total',
            'edit',
        ];
        this.dataSource = [];
        this.manageOrderForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.categories = [];
        this.products = [];
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.ngxService.start();
        this.getCategories();
        this.manageOrderForm = this.formBuilder.group({
            name: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].nameRegex)],
            ],
            email: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].emailRegex)],
            ],
            contactNumber: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].contactNumberRegex),
                ],
            ],
            paymentMethod: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            product: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    getCategories() {
        this.categoryService.getCategory().subscribe((response) => {
            this.ngxService.stop();
            this.categories = response;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
    getProductsByCategory(value) {
        this.productService.getProductsByCategory(value.id).subscribe((response) => {
            this.products = response;
            this.manageOrderForm.controls['price'].setValue('');
            this.manageOrderForm.controls['quantity'].setValue('');
            this.manageOrderForm.controls['total'].setValue('');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
    getProductsDetails(value) {
        this.productService.getById(value.id).subscribe((response) => {
            this.price = response.price;
            this.manageOrderForm.controls['price'].setValue(response.price);
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(this.price * 1);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
    setQuantity(value) {
        var temp = this.manageOrderForm.controls['quantity'].value;
        if (temp > 0) {
            this,
                this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value *
                    this.manageOrderForm.controls['price'].value);
        }
        else if (temp != '') {
            this.manageOrderForm.controls['quantity'].setValue('1');
            this,
                this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value *
                    this.manageOrderForm.controls['price'].value);
        }
    }
    validateProductAdd() {
        if (this.manageOrderForm.controls['total'].value === 0 ||
            this.manageOrderForm.controls['total'].value === null ||
            this.manageOrderForm.controls['quantity'].value <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    validateSubmit() {
        if (this.totalAmount === 0 ||
            this.manageOrderForm.controls['name'].value === null ||
            this.manageOrderForm.controls['email'].value === null ||
            this.manageOrderForm.controls['contactNumber'].value === null ||
            this.manageOrderForm.controls['paymentMethod'].value === null ||
            !(this.manageOrderForm.controls['contactNumber'].valid ||
                !this.manageOrderForm.controls['email'].valid)) {
            return true;
        }
        else {
            return false;
        }
    }
    add() {
        var formData = this.manageOrderForm.value;
        var productName = this.dataSource.find((e) => e.id == formData.product.id);
        if (productName === undefined) {
            this.totalAmount = this.totalAmount + formData.total;
            this.dataSource.push({
                id: formData.product.id,
                name: formData.product.name,
                category: formData.category.name,
                quantity: formData.quantity,
                price: formData.price,
                total: formData.total,
            });
            this.dataSource = [...this.dataSource];
            this.snackbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].productAdded, 'success');
        }
        else {
            this.snackbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].productExistError, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        }
    }
    handleDeleteAction(value, element) {
        this.totalAmount = this.totalAmount - element.total;
        this.dataSource.splice(value, 1);
        this.dataSource = [...this.dataSource];
    }
    submitAction() {
        this.ngxService.start();
        var formData = this.manageOrderForm.value;
        var data = {
            name: formData.name,
            email: formData.email,
            contactNumber: formData.contactNumber,
            paymentMethod: formData.paymentMethod,
            totalAmount: this.totalAmount,
            productDetails: JSON.stringify(this.dataSource),
        };
        this.billService.generateReport(data).subscribe((response) => {
            this.downloadFile(response === null || response === void 0 ? void 0 : response.uuid);
            this.manageOrderForm.reset();
            this.dataSource = [];
            this.totalAmount = 0;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
    downloadFile(fileName) {
        var data = {
            uuid: fileName,
        };
        this.billService.getPdf(data).subscribe((response) => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(response, fileName + '.pdf');
            this.ngxService.stop();
        });
    }
}
ManageOrderComponent.ɵfac = function ManageOrderComponent_Factory(t) { return new (t || ManageOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"])); };
ManageOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageOrderComponent, selectors: [["app-manage-order"]], decls: 102, vars: 18, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "disabled", "click"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row wrap"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "contactNumber", "required", ""], ["matInput", "", "formControlName", "paymentMethod", "required", ""], ["value", "cash"], ["value", "creditCard"], ["value", "debitCard"], ["formControlName", "category", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "product", 3, "selectionChange"], ["matInput", "", "formControlName", "price", "required", "", "readonly", ""], ["matInput", "", "formControlName", "quantity", "required", "", 3, "keyup"], ["input", ""], ["matInput", "", "formControlName", "total", "required", "", "readonly", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "float-right"], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Manage Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageOrderComponent_Template_button_click_4_listener() { return ctx.submitAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Submit & Get Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ManageOrderComponent_mat_error_18_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ManageOrderComponent_mat_error_23_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ManageOrderComponent_mat_error_28_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Debit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ManageOrderComponent_mat_error_39_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Select Product:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ManageOrderComponent_Template_mat_select_selectionChange_51_listener($event) { return ctx.getProductsByCategory($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ManageOrderComponent_mat_option_52_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ManageOrderComponent_Template_mat_select_selectionChange_56_listener($event) { return ctx.getProductsDetails($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ManageOrderComponent_mat_option_57_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ManageOrderComponent_mat_error_62_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ManageOrderComponent_Template_input_keyup_66_listener($event) { return ctx.setQuantity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ManageOrderComponent_mat_error_68_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, ManageOrderComponent_mat_error_73_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageOrderComponent_Template_button_click_75_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](82, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, ManageOrderComponent_th_83_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ManageOrderComponent_td_84_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](85, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, ManageOrderComponent_th_86_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, ManageOrderComponent_td_87_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](88, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ManageOrderComponent_th_89_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ManageOrderComponent_td_90_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](91, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, ManageOrderComponent_th_92_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, ManageOrderComponent_td_93_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](94, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, ManageOrderComponent_th_95_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, ManageOrderComponent_td_96_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](97, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, ManageOrderComponent_th_98_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, ManageOrderComponent_td_99_Template, 4, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, ManageOrderComponent_tr_100_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, ManageOrderComponent_tr_101_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.validateSubmit());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.manageOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.name.touched && ctx.manageOrderForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.email.touched && ctx.manageOrderForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.contactNumber.touched && ctx.manageOrderForm.controls.contactNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.email.touched && ctx.manageOrderForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.manageOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.price.touched && ctx.manageOrderForm.controls.price.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.quantity.touched && ctx.manageOrderForm.controls.quantity.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.total.touched && ctx.manageOrderForm.controls.total.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.validateProductAdd());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total Amount: ", ctx.totalAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRow"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding-bottom: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6Im1hbmFnZS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZmxvYXQtcmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "1KUO":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/manage-category/manage-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoryComponent", function() { return ManageCategoryComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/category/category.component */ "9zJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function ManageCategoryComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageCategoryComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r7.name);
} }
function ManageCategoryComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageCategoryComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageCategoryComponent_td_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.handleEditAction(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageCategoryComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 17);
} }
function ManageCategoryComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 18);
} }
class ManageCategoryComponent {
    constructor(categoryService, ngxService, dialog, snackbarService, router) {
        this.categoryService = categoryService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = ['name', 'edit'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.categoryService.getCategory().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleEditAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Edit',
            data: values,
        };
        dialogConfig.width = '850px';
        const dialogRef = this.dialog.open(_dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditCategory.subscribe((response) => {
            this.tableData();
        });
    }
    handleAddAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Add',
        };
        dialogConfig.width = '850px';
        const dialogRef = this.dialog.open(_dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddCategory.subscribe((response) => {
            this.tableData();
        });
    }
}
ManageCategoryComponent.ɵfac = function ManageCategoryComponent_Factory(t) { return new (t || ManageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ManageCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageCategoryComponent, selectors: [["app-manage-category"]], decls: 24, vars: 4, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "click"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Manage Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageCategoryComponent_Template_button_click_4_listener() { return ctx.handleAddAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ManageCategoryComponent_Template_input_keyup_11_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ManageCategoryComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ManageCategoryComponent_td_18_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ManageCategoryComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ManageCategoryComponent_td_21_Template, 4, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ManageCategoryComponent_tr_22_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ManageCategoryComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding-bottom: 30px !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6Im1hbmFnZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "4GLY":
/*!******************************************************************!*\
  !*** ./src/app/material-component/dialog/user/user.component.ts ***!
  \******************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function UserComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mat_error_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_mat_error_12_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_mat_error_12_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.contactNumber.errors.pattern);
} }
class UserComponent {
    constructor(dialogData, formBuilder, userService, dialogRef, snackbarService, ngxService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.snackbarService = snackbarService;
        this.ngxService = ngxService;
        this.onAddCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.dialogAction = 'Edit';
        this.action = 'Edit';
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            contactNumber: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].contactNumberRegex),
                ],
            ],
        });
        this.userForm.patchValue(this.dialogData.data);
    }
    edit() {
        this.ngxService.start();
        var formData = this.userForm.value;
        var data = {
            id: this.dialogData.data.id,
            contactNumber: formData.contactNumber,
        };
        this.userService.updateContactNumber(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.onEditCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            this.dialogRef.close();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 18, vars: 5, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row-wrap"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "contactNumber", "required", ""], [4, "ngIf"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserComponent_mat_error_12_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_14_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dialogData.action, " User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.controls.contactNumber.touched && ctx.userForm.controls.contactNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.userForm.valid && ctx.userForm.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBtYXJnaW46IC0yNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUtY2VudGVye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "76PZ":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.routing */ "wYia");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-module */ "qAUw");
/* harmony import */ var _dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/view-bill-products/view-bill-products.component */ "AD1o");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/change-password/change-password.component */ "Mq+F");
/* harmony import */ var _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-category/manage-category.component */ "1KUO");
/* harmony import */ var _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/category/category.component */ "9zJD");
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manage-product/manage-product.component */ "kseh");
/* harmony import */ var _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/product/product.component */ "h1U/");
/* harmony import */ var _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage-order/manage-order.component */ "/sgR");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "tEOd");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "Q4hc");
/* harmony import */ var _dialog_user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/user/user.component */ "4GLY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class MaterialComponentsModule {
}
MaterialComponentsModule.ɵfac = function MaterialComponentsModule_Factory(t) { return new (t || MaterialComponentsModule)(); };
MaterialComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: MaterialComponentsModule });
MaterialComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_6__["MaterialRoutes"]),
            _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](MaterialComponentsModule, { declarations: [_dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_8__["ViewBillProductsComponent"],
        _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationComponent"],
        _dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
        _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_11__["ManageCategoryComponent"],
        _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"],
        _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__["ManageProductComponent"],
        _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
        _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_15__["ManageOrderComponent"],
        _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_16__["ViewBillComponent"],
        _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_17__["ManageUserComponent"],
        _dialog_user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]] }); })();


/***/ }),

/***/ "9zJD":
/*!**************************************************************************!*\
  !*** ./src/app/material-component/dialog/category/category.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function CategoryComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_mat_error_12_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.categoryForm.controls.name.errors.required);
} }
class CategoryComponent {
    constructor(dialogData, formBuilder, categoryService, dialogRef, snackbarService, ngxService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.dialogRef = dialogRef;
        this.snackbarService = snackbarService;
        this.ngxService = ngxService;
        this.onAddCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categoryForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.dialogAction = 'Add';
        this.action = 'Add';
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = 'Edit';
            this.action = 'Update';
            this.categoryForm.patchValue(this.dialogData.data);
        }
    }
    handleSubmit() {
        if (this.dialogAction === 'Edit') {
            this.edit();
        }
        else {
            this.add();
        }
    }
    add() {
        this.ngxService.start();
        var formData = this.categoryForm.value;
        var data = {
            name: formData.name,
        };
        this.categoryService.add(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.onAddCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            this.dialogRef.close();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
    edit() {
        this.ngxService.start();
        var formData = this.categoryForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name,
        };
        this.categoryService.update(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.onEditCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            this.dialogRef.close();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 18, vars: 5, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row-wrap"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoryComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_button_click_14_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dialogData.action, " Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryForm.controls.name.touched && ctx.categoryForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.categoryForm.valid && ctx.categoryForm.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcclxuICAgIG1hcmdpbjogLTI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1jZW50ZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AD1o":
/*!**********************************************************************************************!*\
  !*** ./src/app/material-component/dialog/view-bill-products/view-bill-products.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewBillProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillProductsComponent", function() { return ViewBillProductsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");








function ViewBillProductsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewBillProductsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.name);
} }
function ViewBillProductsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewBillProductsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r13.category);
} }
function ViewBillProductsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewBillProductsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r14.price);
} }
function ViewBillProductsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewBillProductsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r15.quantity);
} }
function ViewBillProductsComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewBillProductsComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16.total);
} }
function ViewBillProductsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
function ViewBillProductsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
class ViewBillProductsComponent {
    constructor(dialogData, dialogRef) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.displayedColumns = [
            'name',
            'category',
            'price',
            'quantity',
            'total',
        ];
    }
    ngOnInit() {
        this.data = this.dialogData.data;
        this.dataSource = this.dialogData.data.productDetails;
    }
}
ViewBillProductsComponent.ɵfac = function ViewBillProductsComponent_Factory(t) { return new (t || ViewBillProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
ViewBillProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewBillProductsComponent, selectors: [["app-view-bill-products"]], decls: 48, vars: 8, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "spacer"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "mat-dialog-close"], [1, "mat-typography"], ["id", "customers"], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewBillProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "View Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Payment Method: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](31, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ViewBillProductsComponent_th_32_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ViewBillProductsComponent_td_33_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ViewBillProductsComponent_th_35_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ViewBillProductsComponent_td_36_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ViewBillProductsComponent_th_38_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ViewBillProductsComponent_td_39_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](40, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ViewBillProductsComponent_th_41_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ViewBillProductsComponent_td_42_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](43, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ViewBillProductsComponent_th_44_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ViewBillProductsComponent_td_45_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ViewBillProductsComponent_tr_46_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ViewBillProductsComponent_tr_47_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.paymentMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  margin-bottom: 0;\n  width: auto;\n  margin-bottom: 10PX;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04AA6D;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1iaWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFFSTtFQUNJLFlBQUE7QUFDUjs7QUFFSTtFQUNJLFlBQUE7QUFDUjs7QUFFSTtFQUNJLGFBQUE7QUFDUjs7QUFFSTtFQUNJLFdBQUE7QUFDUjs7QUFHTTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQVI7O0FBR007RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFHTTtFQUE4Qix5QkFBQTtBQUNwQzs7QUFDTTtFQUFxQixzQkFBQTtBQUczQjs7QUFETTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlSIiwiZmlsZSI6InZpZXctYmlsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XHJcbiAgICBtYXJnaW46IC0yNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBQWDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0LXJpZ2h0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgI2N1c3RvbWVycyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgICBcclxuICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgICAgIFxyXG4gICAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9Il19 */"] });


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    add(data) {
        return this.httpClient.post(this.url + '/product/add/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    update(data) {
        return this.httpClient.patch(this.url + '/product/update/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    getProducts() {
        return this.httpClient.get(this.url + '/product/get/');
    }
    updateStatus(data) {
        return this.httpClient.patch(this.url + '/product/updateStatus/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    delete(id) {
        return this.httpClient.delete(this.url + '/product/delete/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    getProductsByCategory(id) {
        return this.httpClient.get(this.url + '/product/getByCategory/' + id);
    }
    getById(id) {
        return this.httpClient.get(this.url + '/product/getById/' + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "Q4hc":
/*!*************************************************************************!*\
  !*** ./src/app/material-component/manage-user/manage-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var _dialog_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/user/user.component */ "4GLY");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");



















function ManageUserComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageUserComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r11.name);
} }
function ManageUserComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageUserComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r12.email);
} }
function ManageUserComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageUserComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r13.contactNumber);
} }
function ManageUserComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageUserComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageUserComponent_td_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.handleEditAction(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageUserComponent_td_25_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.handleDeleteAction(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageUserComponent_td_25_Template_mat_slide_toggle_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.handleChangeAction($event.checked, element_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", element_r14.status);
} }
function ManageUserComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 20);
} }
function ManageUserComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
} }
class ManageUserComponent {
    constructor(userService, router, dialog, snackbarService, ngxService) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.ngxService = ngxService;
        this.displayedColumns = ['name', 'email', 'contactNumber', 'status'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.userService.getUsers().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleChangeAction(status, id) {
        this.ngxService.start();
        var data = {
            status: status.toString(),
            id: id,
        };
        this.userService.update(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    handleEditAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Edit',
            data: values,
        };
        dialogConfig.width = '850px';
        const dialogRef = this.dialog.open(_dialog_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditCategory.subscribe((response) => {
            this.tableData();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: 'delete ' + values.name + ' user',
        };
        const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteUser(values.id);
            dialogRef.close();
        });
    }
    deleteUser(id) {
        this.userService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
}
ManageUserComponent.ɵfac = function ManageUserComponent_Factory(t) { return new (t || ManageUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"])); };
ManageUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageUserComponent, selectors: [["app-manage-user"]], decls: 28, vars: 4, consts: [["appearance", "fill"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "contactNumber"], ["matColumnDef", "status"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["matTooltip", "Activate or Deactivate User", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Manage User");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ManageUserComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ManageUserComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ManageUserComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManageUserComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ManageUserComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ManageUserComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ManageUserComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ManageUserComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ManageUserComponent_td_25_Template, 8, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ManageUserComponent_tr_26_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ManageUserComponent_tr_27_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJtYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZRiD":
/*!******************************************!*\
  !*** ./src/app/services/bill.service.ts ***!
  \******************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BillService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    generateReport(data) {
        return this.httpClient.post(this.url + '/bill/generateReport/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    getPdf(data) {
        return this.httpClient.post(this.url + '/bill/getPdf', data, {
            responseType: 'blob',
        });
    }
    getBills() {
        return this.httpClient.get(this.url + '/bill/getBills');
    }
    delete(id) {
        return this.httpClient.delete(this.url + '/bill/delete/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'applicaton/json'),
        });
    }
}
BillService.ɵfac = function BillService_Factory(t) { return new (t || BillService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BillService, factory: BillService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    add(data) {
        return this.httpClient.post(this.url + '/category/add/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    update(data) {
        return this.httpClient.patch(this.url + '/category/update/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        });
    }
    getCategory() {
        return this.httpClient.get(this.url + '/category/get/');
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "h1U/":
/*!************************************************************************!*\
  !*** ./src/app/material-component/dialog/product/product.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function ProductComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_mat_error_12_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_mat_error_12_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.productForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.productForm.controls.name.errors.pattern);
} }
function ProductComponent_mat_error_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_mat_error_18_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_mat_error_18_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productForm.controls.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productForm.controls.price.errors.pattern);
} }
function ProductComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r8.name);
} }
function ProductComponent_mat_error_29_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_29_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_mat_error_29_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_mat_error_29_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.productForm.controls.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.productForm.controls.description.errors.pattern);
} }
class ProductComponent {
    constructor(dialogData, formBuilder, productService, dialogRef, categoryService, snackbarService, ngxService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.snackbarService = snackbarService;
        this.ngxService = ngxService;
        this.onAddProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.dialogAction = 'Add';
        this.action = 'Add';
        this.categories = [];
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].nameRegex)],
            ],
            categoryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = 'Edit';
            this.action = 'Update';
            this.productForm.patchValue(this.dialogData.data);
        }
        this.getCategories();
    }
    getCategories() {
        this.categoryService.getCategory().subscribe((response) => {
            this.categories = response;
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
    handleSubmit() {
        if (this.dialogAction === 'Edit') {
            this.edit();
        }
        else {
            this.add();
        }
    }
    add() {
        this.ngxService.start();
        var formData = this.productForm.value;
        var data = {
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.add(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.onAddProduct.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'message');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
    edit() {
        this.ngxService.start();
        var formData = this.productForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.update(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.onEditProduct.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'message');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].error);
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 35, vars: 8, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row wrap"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "price", "required", ""], ["formControlName", "categoryId"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "description", "required", ""], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductComponent_mat_error_12_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductComponent_mat_error_18_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductComponent_mat_option_23_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductComponent_mat_error_29_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_31_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dialogData.action, " Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls.name.touched && ctx.productForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls.price.touched && ctx.productForm.controls.price.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls.description.touched && ctx.productForm.controls.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.productForm.valid && ctx.productForm.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBtYXJnaW46IC0yNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUtY2VudGVye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "kseh":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/manage-product/manage-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductComponent", function() { return ManageProductComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/product/product.component */ "h1U/");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");



















function ManageProductComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProductComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r13.name);
} }
function ManageProductComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProductComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r14.categoryName);
} }
function ManageProductComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProductComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r15.description);
} }
function ManageProductComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProductComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r16.price);
} }
function ManageProductComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProductComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageProductComponent_td_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.handleEditAction(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageProductComponent_td_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.handleDeleteAction(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageProductComponent_td_30_Template_mat_slide_toggle_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.onChange($event.checked, element_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", element_r17.status);
} }
function ManageProductComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
} }
function ManageProductComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 23);
} }
class ManageProductComponent {
    constructor(productService, ngxService, dialog, snackbarService, router) {
        this.productService = productService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = [
            'name',
            'categoryName',
            'description',
            'price',
            'edit',
        ];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.productService.getProducts().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleAddAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Add',
        };
        dialogConfig.width = '850px';
        const dialogRef = this.dialog.open(_dialog_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleEditAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Edit',
            data: values,
        };
        dialogConfig.width = '850px';
        const dialogRef = this.dialog.open(_dialog_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: 'delete ' + values.name + ' product',
        };
        const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.productService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    onChange(status, id) {
        this.ngxService.start();
        var data = {
            status: status.toString(),
            id: id,
        };
        this.productService.updateStatus(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
}
ManageProductComponent.ɵfac = function ManageProductComponent_Factory(t) { return new (t || ManageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ManageProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageProductComponent, selectors: [["app-manage-product"]], decls: 33, vars: 4, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "click"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categoryName"], ["matColumnDef", "description"], ["matColumnDef", "price"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["matTooltip", "Activate or Deactivate Product", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Manage Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageProductComponent_Template_button_click_4_listener() { return ctx.handleAddAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ManageProductComponent_Template_input_keyup_11_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ManageProductComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManageProductComponent_td_18_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ManageProductComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ManageProductComponent_td_21_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ManageProductComponent_th_23_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ManageProductComponent_td_24_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ManageProductComponent_th_26_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ManageProductComponent_td_27_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ManageProductComponent_th_29_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ManageProductComponent_td_30_Template, 8, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ManageProductComponent_tr_31_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ManageProductComponent_tr_32_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding-bottom: 30px !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibWFuYWdlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXQtcmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "tEOd":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/view-bill/view-bill.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillComponent", function() { return ViewBillComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var _dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/view-bill-products/view-bill-products.component */ "AD1o");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/bill.service */ "ZRiD");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function ViewBillComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r15.name);
} }
function ViewBillComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r16.email);
} }
function ViewBillComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r17.contactNumber);
} }
function ViewBillComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r18.paymentMethod);
} }
function ViewBillComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r19.total);
} }
function ViewBillComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewBillComponent_td_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.handleViewAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewBillComponent_td_31_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.downloadReportAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "summarize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewBillComponent_td_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.handleDeleteAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewBillComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 22);
} }
function ViewBillComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 23);
} }
class ViewBillComponent {
    constructor(billService, ngxService, dialog, snackbarService, router) {
        this.billService = billService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = [
            'name',
            'email',
            'contactNumber',
            'paymentMethod',
            'total',
            'view',
        ];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.billService.getBills().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    handleViewAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            data: values,
        };
        dialogConfig.width = '100%';
        const dialogRef = this.dialog.open(_dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_3__["ViewBillProductsComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
    }
    downloadReportAction(values) {
        this.ngxService.start();
        var data = {
            name: values.name,
            email: values.email,
            uuid: values.uuid,
            contactNumber: values.contactNumber,
            paymentMethod: values.paymentMethod,
            totalAmount: values.total,
            productDetails: values.productDetails,
        };
        this.billService.getPdf(data).subscribe((response) => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(response, values.uuid + '.pdf');
            this.ngxService.stop();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: 'delete ' + values.name + ' bill',
        };
        const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.billService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].error);
        });
    }
}
ViewBillComponent.ɵfac = function ViewBillComponent_Factory(t) { return new (t || ViewBillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
ViewBillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewBillComponent, selectors: [["app-view-bill"]], decls: 34, vars: 4, consts: [["appearance", "fill"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "contactNumber"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "total"], ["matColumnDef", "view"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "view", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Download Bill", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "View Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ViewBillComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ViewBillComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ViewBillComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ViewBillComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ViewBillComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ViewBillComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ViewBillComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ViewBillComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ViewBillComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ViewBillComponent_th_27_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ViewBillComponent_td_28_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ViewBillComponent_th_30_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ViewBillComponent_td_31_Template, 10, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ViewBillComponent_tr_32_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ViewBillComponent_tr_33_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1iaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "wYia":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-category/manage-category.component */ "1KUO");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/route-guard.service */ "mReP");
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product/manage-product.component */ "kseh");
/* harmony import */ var _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-order/manage-order.component */ "/sgR");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "tEOd");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "Q4hc");






const MaterialRoutes = [
    {
        path: 'category',
        component: _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_0__["ManageCategoryComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__["RouteGuardService"]],
        data: {
            expectedRole: ['admin'],
        },
    },
    {
        path: 'product',
        component: _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_2__["ManageProductComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__["RouteGuardService"]],
        data: {
            expectedRole: ['admin'],
        },
    },
    {
        path: 'order',
        component: _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_3__["ManageOrderComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__["RouteGuardService"]],
        data: {
            expectedRole: ['admin', 'user'],
        },
    },
    {
        path: 'bill',
        component: _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_4__["ViewBillComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__["RouteGuardService"]],
        data: {
            expectedRole: ['admin', 'user'],
        },
    },
    {
        path: 'user',
        component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_5__["ManageUserComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_1__["RouteGuardService"]],
        data: {
            expectedRole: ['admin'],
        },
    },
];


/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map