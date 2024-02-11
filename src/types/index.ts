import { Key, ReactNode } from "react";
import type { Dayjs } from "dayjs";
import { actionTypes } from "@store/action-types";

export interface DefaultPagination<T> {
  data: T;
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface TransferRequest {
  student_enroll_id: string;
  classes: string;
  classes_taken: string;
  classes_pending: string;
  ref_teacher_id: string;
  reason: string;
  teacher_package_id: string;
  slots: string;
  grade: string;
  packageTitle?: string;
}

export type ReducerAction = {
  type: string;
  payload?: any;
};
export type AuthReducer = {
  user: LoggedInUser | null;
  isAuth: boolean;
};

export type SelectItemType = {
  id?: number | string;
  label?: string;
  value?: string | number;
  disabled?: boolean;
};
export type AgeLimitFormattedData = {
  id: number;
  label: string;
  value: string;
};
export type SelectInputData = {
  id: number | string;
  label: string;
  value: string | number;
};
export type ButtonType = "primary" | "secondary" | "tertiary" | "quaternary" | "custom";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "middle" | "small";
export type SelectMaxTagCount = number | "responsive";
export type SelectMode = "multiple" | "tags";
export type SelectPlacement = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
export type DropdownPlacement = "bottom" | "bottomLeft" | "bottomRight" | "top" | "topLeft" | "topRight";
export type AlertType = "success" | "info" | "warning" | "error";
export type DrawerPlacement = "top" | "right" | "bottom" | "left";
export type RadioGroupOption = {
  id?: number | string;
  label?: ReactNode;
  value?: string;
  selectedValue?: string;
  withSelect?: boolean;
  disabled?: boolean;
};
export type OptionType = "default" | "button";
export type DirectionType = "horizontal" | "vertical";
export type DatePickerMode = "time" | "date" | "month" | "year" | "decade";
export type DatePickerType = "date" | "week" | "month" | "quarter" | "year";
export type DatePickerStatus = "warning" | "error";
export type GeneralStateType = {
  activeLearningMenu: string[];
};
export type PersistedGeneralState = {
  whatsNewData: WhatsNewData[];
  domainParametersData: null | FormattedDomainParameters;
  subjects: null | FormattedCreatePackageSubjects;
  topPackages: null | Package[];
};
export type SiderItemSub2ChildrenType = {
  id: string;
  title?: ReactNode;
  to?: string;
};
export type ExpressResourcesTableType = {
  id: Key;
  type: string;
  linkText: string;
  link: string;
  description: ReactNode | string;
};
export enum IFormType {
  CHECKBOX = "checkbox",
  RADIO = "radio",
}
export interface IRadioData {
  id: string;
  title: string;
  options: RadioGroupOption[];
}
export interface IFormData {
  title: string;
  type: IFormType;
  isComment?: boolean;
  options: RadioGroupOption[] | IRadioData[];
}

interface Student {
  name: string;
}

interface IPayments {
  no_of_days: number;
}

export type DataType = {
  key: string;
  id: string;
  student: Student;
  amount: string;
  payment_status: string;
  due_date: string;
  currency?: string;
  paidOn: string;
  payments: IPayments[];
  share_transfer_at: string | null;
  receipt: string;
};
export type IData = {
  id: string;
  title: string;
  value: string;
};
export type MenuItemType = {
  id?: number;
  label?: ReactNode;
  onClick?: (data?: any) => void;
  disabled?: boolean;
  preixIcon?: ReactNode | null;
  suffixIcon?: ReactNode | null;
  children?: {
    id?: number;
    label?: ReactNode;
    onClick?: (data?: any) => void;
    disabled?: boolean;
    preixIcon?: ReactNode | null;
    suffixIcon?: ReactNode | null;
  }[];
};
export type PriceTableType = {
  id: number;
  tutorType: string;
  programType: string;
  for8Months: string;
  for12Months: string;
  for16Months: string;
  for20Months: string;
  for24Months: string;
};
export interface ITheme {
  DARK_GREEN: string;
  BLACK: string;
  BLACK02: string;
  BLACK03: string;
  WHITE: string;
  PINK: string;
  GREEN: string;
  GREEN02: string;
  YELLOW: string;
  ORANGE: string;
  LIGHT_ORANGE: string;
  RED: string;
  PGREEN: string;
  LIGHT_GREY: string;
  LIGHT_GREY2: string;
  GREY: string;
  HEADING: string;
  YELLOW02: string;
  YELLOW03: string;
  PINK02: string;
  GREY02: string;
  GREY03: string;
  DARK_BLUE: string;
  LIGHT_INDIGO: string;
  LIGHT_YELLOW: string;
}
export interface ISize {
  XXL2: number;
  XXL: number;
  XL: number;
  L: number;
  M: number;
  M2: number;
  S: number;
  XS: number;
  XXS: number;
  DEFAULT: number;
}
export interface ILineHeight {
  XXS: number;
  XS: number;
  S: number;
  M: number;
  M2: number;
  L: number;
  XL: number;
  XXL: number;
  XXL2: number;
  DEFAULT: number;
}
export interface IFontWeight {
  LIGHTEST: string;
  LIGHTER: string;
  NORMAL: string;
  SEMIBOLD: string;
  BOLD: string;
  BOLDER: string;
}
export type Size = "XXL2" | "XXL" | "XL" | "L" | "M" | "M2" | "S" | "XS" | "XXS" | "DEFAULT";
export type Font = "LIGHTEST" | "LIGHTER" | "NORMAL" | "SEMIBOLD" | "BOLD" | "BOLDER";
export type Color =
  | "DARK_GREEN"
  | "BLACK"
  | "BLACK02"
  | "BLACK03"
  | "WHITE"
  | "PINK"
  | "GREEN"
  | "GREEN02"
  | "YELLOW"
  | "ORANGE"
  | "LIGHT_ORANGE"
  | "RED"
  | "GREY03"
  | "PGREEN"
  | "HEADING"
  | "YELLOW02"
  | "YELLOW03"
  | "PINK02"
  | "GREY02"
  | "GREY"
  | "LIGHT_GREY"
  | "LIGHT_GREY2"
  | "DARK_BLUE"
  | "LIGHT_INDIGO"
  | "LIGHT_YELLOW";
export type MetaData = {
  [key: string]: string | boolean | number;
};
export type StringMetaData = {
  [key: string]: string;
};
export type LoginFormData = {
  email: string;
  password: string;
};
export type ChangePasswordFormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};
export type ProfileFormData = {
  dob?: string;
  experience?: number;
  country?: string;
  city?: string;
  area?: string;
  address?: string;
  cnic?: string;
  phone?: string;
  profilePhoto?: any;
  subjects?: string[] | any;
  academicLevel?: number;
  qualification?: number;
  tagLine?: string;
  bio?: string;
  demoVideo?: any;
};
export type BankFormData = {
  bankName?: string;
  accountTitle?: string;
  iban?: string;
  swiftCode?: string;
  accountNumber?: string;
};
export type User = {
  id?: number;
  name?: string;
  email?: string;
  picture?: string;
  status?: 0 | 1;
  isBlocked?: 0 | 1;
  last_activity?: string;
  last_login?: string;
  last_login_admin?: string;
  login_count_admin?: number;
  created_at?: string;
  updated_at?: string;
  user_type?: string;
  is_test?: 0 | 1;
  area_manager?: 0 | 1;
  created_by?: string;
  updated_by?: string;
  designation?: string;
  last_name?: string;
  student_grades?: string;
  login_type?: string;
  uuid?: string;
  house_floor?: string;
  building?: string;
  address?: string;
  phone?: string;
  on_boarding?: string;
  country?: string;
  city?: string;
  area?: string;
  postal_code?: number;
};
export type LoggedInUser = {
  token?: string;
  user?: User;
};
export type ExtendedLoginResponse = {
  data?: LoggedInUser;
};
export type AxiosResponseData = {
  message?: string;
  status?: string;
  statusCode?: number;
};
export type ProfileReview = {
  name?: string;
  review?: string;
  rating: number;
};
export type CoursePackage = {
  title?: string;
  amount?: number;
  description?: string;
  hours_per_week?: number;
  timings?: string;
};
export type Qualification = {
  id?: number;
  name?: string;
  status?: 0 | 1;
  deleted_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};
export type Teacher = {
  id: number;
  rating: null | number;
  area: string;
  city: string;
  country: string;
  bio: string;
  tagline: string;
  user_id: number;
  area_manager_id: number;
  subject_id: number;
  captain_id: number;
  referred_by: null | string;
  tier: number;
  higherGrades: number;
  isExpress: boolean;
  isOnline: boolean;
  isOffline: boolean;
  isSuper: boolean;
  assignDemos: boolean;
  internationalDemos: number;
  tpStatus: string;
  created_at: string;
  updated_at: string;
  recruitedDate: string;
  trainingCompletionDate: string;
  lastDate: string;
  leavingReason: string;
  dob: string;
  demo_video: null | string;
  long_term_plans: null | string;
  computer_litearcy: number;
  communication_skills: number;
  years_of_experience: number;
  latest_degree: string;
  assigned_per: number;
  scheduled_per: number;
  registered_per: number;
  avg_per: number;
  retention_basic_score: number;
  retention_score: number;
  retention_status: string;
  conversion: string;
  isDemoSettingsSet: boolean;
  isApptScheduleSet: boolean;
  isNewTP: boolean;
  active_student_count: number;
  international_student_count: number;
  qualification_level_id: number;
  qualification_id: number;
  social_skills: number;
  confidence_skills: number;
  creative_skills: number;
  emotional_skills: number;
  avg_month_conversion: number;
  subjects: string;
  is_graduated: 1;
  qualification: Qualification;
  qualification_levels: Qualification;
  training_phase: number;
};
export type Profile = {
  id: number;
  name?: string;
  bio?: string;
  address?: string;
  cnic?: string;
  email?: string;
  phone?: string;
  tagline?: string;
  latest_degree?: string;
  location?: string;
  teaching_methods?: string[];
  active_students?: number;
  lifetime_hours?: number;
  programs?: string[];
  reviews?: ProfileReview[];
  picture?: string;
  course_packages?: CoursePackage[];
  average_rating?: number;
  super_tutor?: number;
  qualification?: Qualification;
  qualification_level?: Qualification;
  teacher?: Teacher;
  area_manager: 0 | 1;
  area_manager_name: string | null;
};
export type ProfileStateType = {
  userProfile: Profile | null;
  progressTrackerData: ProgressTrackerData | null;
  bankDetails: BankDetails | null;
};
export type ExtendedGetProfileResponse = {
  data: Profile;
};
export type ProgressTrackerTeacherDetails = {
  id: number;
  retention_basic_score: number;
  retention_score: number;
  tpStatus: string;
  active_student_count: number;
  international_student_count: number;
  avg_month_conversion: number;
  total_packages: number;
  demo_conversion: number;
};
export type ProgressTrackerData = {
  lifetime_hours: number;
  teacher_details: ProgressTrackerTeacherDetails;
};
export type AxiosLoginData = AxiosResponseData & ExtendedLoginResponse;
export type AxiosGetProfileData = AxiosResponseData & ExtendedGetProfileResponse;
export type TeacherBadgeType = "teacher_manager" | "super_teacher" | "graduate_teacher";
type Generic = string;
type GenericFn = (value: Dayjs) => string;
export type FormatType = Generic | GenericFn | Array<Generic | GenericFn>;
export type CountryData = {
  title: string;
  icon: string;
  code: string;
  value: string;
  mask: string;
  id: string;
};
export type BankDetails = {
  id?: number;
  teacher_id?: number;
  bank_name?: string;
  account_title?: string;
  account_number?: string;
  account_iban?: string;
  swift_code?: string;
  comments?: string;
  created_at?: string;
  updated_at?: string;
};
export type WhatsNewData = {
  id: number;
  teacher_id: number;
  title: string;
  description: string;
  image: string;
};
export type Subjects = {
  id: number;
  subject: string;
  status: number;
  program_id: number;
  created_at: string;
  updated_at: string;
  level: string;
};
export type DomainParameters = {
  countries: StringMetaData;
  cities: StringMetaData;
  areas: string[];
  qualifications: Qualification[];
  qualification_levels: Qualification[];
  subjects: Subjects[];
};
export type ExpressSubject = {
  id: number;
  subject: string;
};
export type PremiumSubject = {
  id: number;
  subject: string;
};
export type ShortCourseSubject = {
  id: number;
  title: string;
};
export type CreatePackageSubjects = {
  express: ExpressSubject[];
  premium: PremiumSubject[];
  short_courses: ShortCourseSubject[];
};
export type FormattedCreatePackageSubjects = {
  express: SelectItemType[];
  premium: SelectItemType[];
  short_courses: SelectItemType[];
};
export type FormattedDomainParameters = {
  areas: SelectItemType[];
  cities: SelectItemType[];
  countries: SelectItemType[];
  qualificationLevels: SelectItemType[];
  qualifications: SelectItemType[];
  subjects: SelectItemType[];
};
export type TimeSlot = {
  id: string;
  days: string[];
  timeSlot: string;
  startTime: string;
  endTime: string;
  totalSeats: string;
  openForDemo: string;
};
export type CourseTopic = {
  id: string;
  topicName: string;
  topicDescription: string;
};
export type LearningOutcome = {
  id: string;
  value: string;
};
export type CreatePackageFormData = {
  program: number;
  packageMode: string;
  enrolmentMode: string;
  recurring?: string;
  accessMode: string;
  subjects: number[] | number;
  startDate: string;
  endDate: string;
  grades: string[];
  minAge: string;
  maxAge: string;
  packageTitle: string;
  teacherIntro: string;
  description: string;
  topics: CourseTopic[];
  learningOutcomes: LearningOutcome[];
  zoomLink: string;
  courseOutlinePDF: any;
  packageCoverImage: any;
  timeZone: string;
  timeSlots: TimeSlot[];
  localMonthlyFee: string;
  internationalMonthlyFee: string;
};
export type AgeLimitType = {
  id: number;
  value: string;
  name: string;
  min: number;
  max: number;
};
export type SlotTimeType = {
  id: number;
  label: string;
  value: string;
  disabled: boolean;
};
export type Grade = {
  id: number;
  title: string;
  created_at: Date;
  updated_at: null;
  sort_order: number;
  age_range: string;
  level: string;
  pivot: Pivot;
};
export type Pivot = {
  package_id: number;
  grade_id: number;
};
export type Links = {
  self: string;
};
export type Program = {
  id: number;
  name: string;
  status: number;
};
export type AreaManager = {
  id: number;
  name: string;
  email: string;
  picture: string;
  address: null;
  house_floor: null;
  latest_degree: string;
  city: null;
  area: null;
  phone: string;
  postal_code: null;
  created_at: Date;
};
export type QualificationOfPackage = {
  id: number;
  name: string;
  status: number;
  deleted_at: null;
  created_at: null;
  updated_at: null;
};
export type PackageTimeSlot = {
  id: number;
  teacher_package_id: number;
  time_slot: string;
  start_time: string;
  end_time: string;
  hours_per_week: number;
  days: string;
  demo_status: number;
  seats: number;
  zoom_link: string;
  status: number;
  created_at: Date;
  updated_at: Date;
  time_zone: string;
  deleted_at: null;
  enrollCount: number;
};
export type PackageTeacher = {
  id: number;
  name: string;
  email: string;
  phone: string;
  picture: string;
  address: string;
  city: string;
  country: string;
  area: string;
  dob: Date;
  area_manager: AreaManager;
  tier: string;
  super_tutor: number;
  teacher_status: string;
  recruited_date: null;
  training_completion_date: null;
  bio: string;
  tagline: string;
  demo_video: string;
  latest_degree: string;
  avg_per: number;
  subjects: string;
  ratings: string;
  qualification: QualificationOfPackage;
  qualification_level: QualificationOfPackage;
  is_new: number;
  links: Links;
};
export type Course = {
  id: number;
  title: string;
  base_fee: number;
  subscription: number;
  tpShare1: number;
  tpShare2: number;
  self_marketing_share: number;
  pricing_type: string;
  months_valid: number;
  status: number;
  created_at: Date;
  updated_at: Date;
  program: null;
  international_fee: number;
};
export type Package = {
  id: number;
  title: string;
  amount: number;
  int_amount: number;
  program: Program;
  teacher: PackageTeacher;
  type: string;
  package_mode: string;
  enrollment_mode: string;
  status: number;
  min_age: number;
  max_age: number;
  course: Course | null;
  subjects: { id: number; subject: string }[];
  time_slot: PackageTimeSlot[];
  is_booked: number;
  grades: Grade[];
  demos_count: number;
  demo: null;
  image: string;
  is_new: number;
  links: Links;
  access_mode: string;
  is_recurring?: string;
  start_date: string;
  teacher_intro: string;
  description: string;
  about_the_course: string;
  learning_outcome: string;
  course_outline_pdf: string;
  endDate: string | null;
  enrollments_count: number;
  active_enrollments_count: number;
};
export type PackagesStateType = {
  packagesData: PackagesData;
};
export type PackagesData = {
  packages: Package[];
  currentPage: number;
  perPage: number;
  total: number;
  loadingPackages: boolean;
};
export type PackagesAction = {
  type: typeof actionTypes.SET_PACKAGES;
  payload: {
    packages?: Package[];
    currentPage?: number;
    perPage?: number;
    total?: number;
    loadingPackages?: boolean;
  };
};
export type PackagesReducerAction = PackagesAction;
export type EnrollmentTeacher = {
  id: number;
  name: string;
  email: string;
  picture: string;
  address: null;
  house_floor: null;
  latest_degree: string;
  city: null;
  area: null;
  phone: string;
  postal_code: null;
  created_at: Date;
};
export type Subject = {
  id: number;
  subject: string;
  program: null;
  created_at: Date;
};
export type ParentTeacher = {
  id: number;
  rating: null;
  area: string;
  city: string;
  country: string;
  bio: string;
  tagline: string;
  user_id: number;
  area_manager_id: number;
  subject_id: number;
  captain_id: number;
  referred_by: null;
  tier: string;
  higherGrades: number;
  isExpress: number;
  isOnline: number;
  isOffline: number;
  isSuper: number;
  assignDemos: number;
  internationalDemos: number;
  tpStatus: string;
  created_at: Date;
  updated_at: Date;
  recruitedDate: null;
  trainingCompletionDate: null;
  lastDate: Date;
  leavingReason: string;
  dob: Date;
  demo_video: string;
  long_term_plans: null;
  computer_litearcy: number;
  communication_skills: number;
  years_of_experience: number;
  latest_degree: string;
  assigned_per: number;
  scheduled_per: number;
  registered_per: number;
  avg_per: number;
  retention_basic_score: number;
  retention_score: number;
  retention_status: string;
  conversion: string;
  isDemoSettingsSet: number;
  isApptScheduleSet: number;
  isNewTP: number;
  active_student_count: number;
  international_student_count: number;
  qualification_level_id: number;
  qualification_id: number;
  social_skills: number;
  confidence_skills: number;
  creative_skills: number;
  emotional_skills: number;
  avg_month_conversion: number;
  subjects: string[];
  is_graduated: number;
};
export type Parent = {
  id: number;
  name: string;
  email: string;
  picture: null | string;
  fcm_token: null;
  status: number;
  isBlocked: number;
  last_activity: Date | null;
  last_login: Date | null;
  last_login_admin: Date;
  login_count_admin: number;
  created_at: Date;
  updated_at: Date;
  user_type: string;
  is_test: number;
  area_manager: number;
  created_by: number | null;
  updated_by: null;
  designation: null | string;
  last_name: null | string;
  student_grades: null;
  login_type: string;
  uuid: null | string;
  house_floor: null;
  building: null;
  address: null;
  on_boarding: null;
  area: null;
  city: null | string;
  country: null | string;
  postal_code: null;
  stripe_id: null;
  card_brand: null;
  card_last_four: null;
  trial_ends_at: null;
  source: null;
  teacher: ParentTeacher | null;
};
export type StudentIDClass = {
  id: number;
  old_id: null;
  name: string;
  dob: Date;
  school: string;
  board: string;
  level: string;
  gender: string;
  mobile: string;
  landline: null;
  city: string;
  country: string;
  source_of_registration: string;
  emergency_contact_name: null;
  emergency_contact_number: null;
  address: string;
  parent_id: number;
  is_test: number;
  image: string;
  status: string;
  payment_mode: string;
  invoice_date: null;
  created_by: null;
  updated_by: null;
  created_at: Date;
  updated_at: Date;
  avatar: null;
  parent: Parent;
};
export type PaymentPivot = {
  invoice_id: number;
  payment_id: number;
  created_at: Date;
  updated_at: Date;
};
export type SubjectPivot = {
  package_id: number;
  subject_id: number;
  created_at: Date;
  updated_at: Date;
};
export type FluffySubject = {
  id: number;
  subject: string;
  status: number;
  program_id: number;
  created_at: Date;
  updated_at: Date;
  level: string;
  pivot: SubjectPivot;
};
export type EnrollPackage = {
  id: number;
  title: string;
  description: null;
  program_id: number;
  amount: number;
  teacher_id: number;
  type: string;
  package_mode: string;
  status: number;
  course_id: null;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  min_age: number;
  max_age: number;
  enrollment_mode: string;
  image: string;
  int_amount: number;
  start_date: Date;
  access_mode: string;
  is_approved: number;
  about_the_course: string;
  learning_outcome: string;
  teacher_intro: string;
  course_outline_pdf: null;
  package_type: string;
  subjects: FluffySubject[];
  teacher: Parent;
  time_slots: PackageTimeSlot[];
  program: Qualification;
  course: null;
  grades: Grade[];
};
export type Enroll = {
  id: number;
  student_id: number;
  teacher_id: number;
  program_id: number;
  teacher_package_id: number;
  slot_id: number;
  student_type: "alumni" | "transfer" | "student" | "archive" | "break";
  registration_date: Date;
  joining_date: Date;
  dropout_date: null;
  dropout_reason: null;
  subscription: string;
  fee_version: string;
  pricing_type: string;
  promo_code_id: null;
  discount: number;
  isSubsidised: number;
  learningPack: number;
  program_type: string;
  non_paying: number;
  en_lesson_id: number;
  en_level_id: number;
  math_level_id: number;
  grade_id: number;
  last_paid: null;
  gen_date: Date;
  due_date: Date;
  alumni_date: Date;
  cpay_date: null;
  break_start: null;
  break_end: null;
  deal_id: number;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  source: string;
  lead_source_id: null;
  payment_type: string;
  referral_code_id: null;
  old_enroll_id: null;
  package: EnrollPackage;
};

export type PaymentElement = {
  id: number;
  student_enroll_id: number;
  student_id: number;
  base_fee: number;
  amount: number;
  teacher_discount: number;
  dnl_discount: number;
  teacher_share: number;
  dnl_share: number;
  no_of_days: number;
  payment_date: Date;
  payment_status: string;
  payment_type: string;
  is_half: number;
  created_by: number;
  invoice_id: number;
  emailSend: number;
  collected_at: null;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  pivot: PaymentPivot;
  enroll: Enroll;
};
export type Invoice = {
  id: number;
  transaction_id: string;
  payment_method: string;
  student_id: StudentIDClass;
  student: StudentIDClass;
  amount: number;
  discount: number;
  invoice_date: Date;
  receipt: null;
  due_date: Date;
  paid_at: null;
  share_transfer_at: null;
  link: string;
  payment_link: string;
  payment_status: string;
  status: number;
  card: null;
  payments: PaymentElement[];
  currency: string;
  penalty: null;
};
export type Payment = {
  student_enroll_id: number;
  student_id: number;
  base_fee: number;
  amount: number;
  teacher_discount: number;
  dnl_discount: number;
  teacher_share: number;
  dnl_share: number;
  no_of_days: number;
  payment_date: Date;
  payment_status: string;
  pending: null;
  payment_type: string;
  is_half: number;
  created_by: number;
  invoice: Invoice;
  emailSend: number;
  collected_at: null;
};
export type EnrollmentStudent = {
  id: number;
  name: string;
  dob: Date;
  school: string;
  board: string;
  level: string;
  gender: string;
  country: string;
  city: string;
  parent_id: number;
  date_of_joining: null;
  image: string;
  avatar: null;
};
export type ProgressReport = {
  id: number;
  student_id: number;
  teacher_id: number;
  enroll_id: number;
  from: string;
  to: string;
  grade: string;
  strengths: string;
  challenges: string;
  behavioural_brief: string;
  wellness_radar: string;
  created_at: Date;
  updated_at: Date;
  link: string;
};
export type Certificates = {
  id: number;
  teacher_id: number;
  student_id: number;
  enroll_id: number;
  student_name: null | string;
  date: string;
  certificate_type: string;
  created_at: Date;
  updated_at: Date;
  for: string;
  master_level: null | string;
  link: null | string;
};
export type Enrollment = {
  id: number;
  student_id: number;
  teacher: EnrollmentTeacher;
  program: Program;
  package: Package;
  slot: PackageTimeSlot;
  student: EnrollmentStudent;
  student_type: "alumni" | "transfer" | "student" | "archive" | "break";
  registration_date: Date;
  joining_date: Date;
  gen_date: Date;
  subscription: string;
  pricing_type: string;
  program_type: string;
  payment: Payment;
  demo: null;
  base_line_forms: BaselineForm[];
  progress_reports: ProgressReport[];
  certificates: Certificates[];
};
export type EnrollmentsData = {
  enrollments: Enrollment[];
  package: EnrollPackage;
};
export type BaselineFormData = {
  teacherName: string;
  studentName: string;
  board: string;
  otherBoard?: string;
  personality: string;
  interest: string;
  milestones: string;
  areaOfInterest: string;
  haveJoined: string[];
  behaviouralGoals: string[];
  grade: string;
  examPattern: string;
  classTime: string;
  teachingStyle: string;
  academicGoal: string[];
  studentId: number;
  teacherId: number;
};
export type BaselineForm = {
  id: number;
  teacher_id: number;
  student_id: number;
  board: string;
  have_joined: string[];
  behavioural_goals: string[];
  milestones: string;
  personality: string;
  interest: string;
  teaching_style: string;
  class_time: string;
  grade: string;
  academic_goal: string[];
  exam_pattern: string;
  area_of_interest: string;
  created_at: Date;
  updated_at: Date;
};
export type ProgressReportForm = {
  studentId: number;
  teacherId: number;
  enrollId: number;
  studentName: string;
  grade: string;
  teacherName: string;
  attendence: string;
  attendenceTotal: string;
  strengths?: string;
  challenges?: string;
  behavioralBrief?: string;
  monthlyAssessment?: string;
  score: string;
  scoreTotal: string;
  milestone?: string;
  knowledge?: string;
  timeManagement?: string;
};
export type AttendenceData = {
  studentId: number;
  status: "present" | "absent";
};
export type StatusStr = "success" | "error";
export enum StatusCode {
  SUCCESS = 200,
  BADREQUEST = 400,
}
export interface ApiDefaultResponse<T> {
  data: T;
  message: string;
  status: StatusStr;
  statusCode: StatusCode;
}
export type UpdateEnrollStatusForm = {
  status: string;
  date: string;
  reason: string;
  startDate: string;
  endDate: string;
};
export type ForgotPasswordFormData = {
  email: string;
};
export type ChildAvatar = {
  id: string;
  name: string;
  icon: string;
};
export type CertificateValues = {
  teacherId: number;
  studentId: number;
  enrollId: number;
  date: string;
  studentName: string;
  certificateType: "completion" | "behavioural" | "mastery" | "";
  for: string;
  masterLevel?: string;
};

export type TrainingPhase = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  modules: TrainingModule[];
};

export type TrainingModule = {
  id: number;
  title: string;
  description: string;
  index: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  phase_id: number;
  items: TrainingModuleItem[];
};

export type TrainingModuleItem = {
  id: number;
  module_id: number;
  index: number;
  type: "doc" | "video" | "link";
  title: string;
  thumbnail: null | string;
  link: string;
  transcript: null | string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export type OutlineAssessmentSubject = {
  id: number;
  subject: string;
  status: number;
  program_id: number;
  created_at: Date;
  updated_at: Date;
  level: string;
};

export type OutlineAssessment = {
  id: number;
  pdf_url: string;
  status: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  subject_id: number;
  subject: OutlineAssessmentSubject;
};

export type OutlineAssessmentColumns = {
  id: number;
  link: string;
  subject: string;
};

export type PremiumResources = {
  lesson: Lesson[];
  subjects: PremiumResourceSubject[];
  grades: PremiumResourcesGrade[];
  lessonPack_option: LessonPackOption;
};

export type PremiumResourcesGrade = {
  id: number;
  title: GradeTitle;
  description: GradeDescription;
  created_at: Date | null;
  updated_at: Date | null;
  color: string;
  created_by: number | null;
  updated_by: number | null;
  subject_id: number;
  deleted_at: null;
};

export enum GradeDescription {
  Grade1 = "Grade 1",
  Grade2 = "Grade 2",
  Grade3 = "Grade 3",
  Grade4 = "Grade 4",
  Grade5 = "Grade 5",
  Grade6 = "Grade 6",
  Grade7 = "Grade 7",
  Senior = "Senior",
  WinterCamp = "winter Camp",
}

export enum GradeTitle {
  Level1 = "Level 1",
  Level2 = "Level 2",
  Level3 = "Level 3",
  Level4 = "Level 4",
  Level5 = "Level 5",
  Level6 = "Level 6",
  Level7 = "Level 7",
  Senior = "Senior",
  WinterCamp = "Winter Camp",
}

export type Lesson = {
  id: number;
  title: string;
  type: LessonType;
  version: LessonVersion;
  subject_id: number | null;
  grade_id: number | null;
  math_grade_id: number | null;
  eng_level: null | string;
  eng_level_id: number | null;
  link: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  subject: PremiumResourceSubject | null;
  grade: Grade | null;
};

export enum LessonSubjectEnum {
  ArtsCrafts = "Arts & Crafts",
  English = "English",
  Math = "Math",
  Science = "Science",
  Urdu = "Urdu",
}

export enum LessonType {
  AnswerScheme = "answer_scheme",
  Other = "other",
  Pehchaan = "pehchaan",
  Standard = "standard",
  TopicList = "topic_list",
  Trial = "trial",
}

export enum LessonVersion {
  Version1 = "version_1",
  Version2 = "version_2",
}

export type LessonPackOption = {
  trial: string;
  standard: string;
  answer_scheme: string;
  topic_list: string;
  other: string;
  pehchaan: string;
};

export type ExpressResources = {
  resources: ExpressResource[];
  subjects: ExpressResourceSubject[];
};

export type ResourceType = "teacher" | "student" | "both";

export type ExpressResourceLink = {
  id: number;
  title: string;
  description: string;
  link: string;
  type: ResourceType;
  subject_id: number;
  resource_id: number;
  created_at: Date;
  updated_at: Date;
  subject: ExpressResourceSubject[];
};

export type ExpressResource = {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date | null;
  links: ExpressResourceLink[];
};

export type ExpressResourceSubject = {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date | null;
  forDemo: number;
};

export type CodingResource = {
  id: number;
  title: string;
  items: CodingResourceItem[];
};

export type CodingResourceItem = {
  text: string;
  dataRef: string;
  type: "mp4" | "pdf";
  url: string;
};

export type PremiumResourceSubject = {
  id: number;
  subject: string;
  status: number;
  program_id: number;
  created_at: Date;
  updated_at: Date;
  level: string;
};

export type LearningResources = {
  codingResources: CodingResource[];
  expressResources: ExpressResource[];
  expressResourceSubjects: ExpressResourceSubject[];
  outlineAssessments: OutlineAssessment[];
  outlineAssessmentSubjects: OutlineAssessmentSubject[];
  premiumResourceSubjects: PremiumResourceSubject[];
  trainingPhases: TrainingPhase[];
};

export type LearningState = {
  loadingLearningResouces: boolean;
  learningResouces: LearningResources;
  loadingPremiumResources: boolean;
  premiumResources: PremiumResources;
};
