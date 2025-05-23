/*
 * This is a generated file
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Contract } from './Contract';
import { Device } from './Device';
import { DocumentReference } from './DocumentReference';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { QuestionnaireResponse } from './QuestionnaireResponse';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * A record of a healthcare consumer&rsquo;s  choices, which permits or denies
 * identified recipient(s) or recipient role(s) to perform one or more
 * actions within a given policy context, for specific purposes and
 * periods of time.
 */
export interface Consent {

  /**
   * This is a Consent resource
   */
  readonly resourceType: 'Consent';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Unique identifier for this copy of the Consent Statement.
   */
  identifier?: Identifier[];

  /**
   * Indicates the current state of this consent.
   */
  status: 'draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error';

  /**
   * A selector of the type of consent being presented: ADR, Privacy,
   * Treatment, Research.  This list is now extensible.
   */
  scope: CodeableConcept;

  /**
   * A classification of the type of consents found in the statement. This
   * element supports indexing and retrieval of consent statements.
   */
  category: CodeableConcept[];

  /**
   * The patient/healthcare consumer to whom this consent applies.
   */
  patient?: Reference<Patient>;

  /**
   * When this  Consent was issued / created / indexed.
   */
  dateTime?: string;

  /**
   * Either the Grantor, which is the entity responsible for granting the
   * rights listed in a Consent Directive or the Grantee, which is the
   * entity responsible for complying with the Consent Directive, including
   * any obligations or limitations on authorizations and enforcement of
   * prohibitions.
   */
  performer?: Reference<Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>[];

  /**
   * The organization that manages the consent, and the framework within
   * which it is executed.
   */
  organization?: Reference<Organization>[];

  /**
   * The source on which this consent statement is based. The source might
   * be a scanned original paper form, or a reference to a consent that
   * links back to such a source, a reference to a document repository
   * (e.g. XDS) that stores the original consent document.
   */
  sourceAttachment?: Attachment;

  /**
   * The source on which this consent statement is based. The source might
   * be a scanned original paper form, or a reference to a consent that
   * links back to such a source, a reference to a document repository
   * (e.g. XDS) that stores the original consent document.
   */
  sourceReference?: Reference<Consent | DocumentReference | Contract | QuestionnaireResponse>;

  /**
   * The references to the policies that are included in this consent
   * scope. Policies may be organizational, but are often defined
   * jurisdictionally, or in law.
   */
  policy?: ConsentPolicy[];

  /**
   * A reference to the specific base computable regulation or policy.
   */
  policyRule?: CodeableConcept;

  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or
   * no) was verified with the patient, his/her family or another
   * authorized person.
   */
  verification?: ConsentVerification[];

  /**
   * An exception to the base policy of this consent. An exception can be
   * an addition or removal of access permissions.
   */
  provision?: ConsentProvision;
}

/**
 * The source on which this consent statement is based. The source might
 * be a scanned original paper form, or a reference to a consent that
 * links back to such a source, a reference to a document repository
 * (e.g. XDS) that stores the original consent document.
 */
export type ConsentSource = Attachment | Reference<Consent | DocumentReference | Contract | QuestionnaireResponse>;

/**
 * The references to the policies that are included in this consent
 * scope. Policies may be organizational, but are often defined
 * jurisdictionally, or in law.
 */
export interface ConsentPolicy {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Entity or Organization having regulatory jurisdiction or
   * accountability for  enforcing policies pertaining to Consent
   * Directives.
   */
  authority?: string;

  /**
   * The references to the policies that are included in this consent
   * scope. Policies may be organizational, but are often defined
   * jurisdictionally, or in law.
   */
  uri?: string;
}

/**
 * An exception to the base policy of this consent. An exception can be
 * an addition or removal of access permissions.
 */
export interface ConsentProvision {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Action  to take - permit or deny - when the rule conditions are met.
   * Not permitted in root rule, required in all nested rules.
   */
  type?: 'deny' | 'permit';

  /**
   * The timeframe in this rule is valid.
   */
  period?: Period;

  /**
   * Who or what is controlled by this rule. Use group to identify a set of
   * actors by some property they share (e.g. 'admitting officers').
   */
  actor?: ConsentProvisionActor[];

  /**
   * Actions controlled by this Rule.
   */
  action?: CodeableConcept[];

  /**
   * A security label, comprised of 0..* security label fields (Privacy
   * tags), which define which resources are controlled by this exception.
   */
  securityLabel?: Coding[];

  /**
   * The context of the activities a user is taking - why the user is
   * accessing the data - that are controlled by this rule.
   */
  purpose?: Coding[];

  /**
   * The class of information covered by this rule. The type can be a FHIR
   * resource type, a profile on a type, or a CDA document, or some other
   * type that indicates what sort of information the consent relates to.
   */
  class?: Coding[];

  /**
   * If this code is found in an instance, then the rule applies.
   */
  code?: CodeableConcept[];

  /**
   * Clinical or Operational Relevant period of time that bounds the data
   * controlled by this rule.
   */
  dataPeriod?: Period;

  /**
   * The resources controlled by this rule if specific resources are
   * referenced.
   */
  data?: ConsentProvisionData[];

  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: ConsentProvision[];
}

/**
 * Who or what is controlled by this rule. Use group to identify a set of
 * actors by some property they share (e.g. 'admitting officers').
 */
export interface ConsentProvisionActor {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * How the individual is involved in the resources content that is
   * described in the exception.
   */
  role: CodeableConcept;

  /**
   * The resource that identifies the actor. To identify actors by type,
   * use group to identify a set of actors by some property they share
   * (e.g. 'admitting officers').
   */
  reference: Reference<Device | Group | CareTeam | Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>;
}

/**
 * The resources controlled by this rule if specific resources are
 * referenced.
 */
export interface ConsentProvisionData {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * How the resource reference is interpreted when testing consent
   * restrictions.
   */
  meaning: 'instance' | 'related' | 'dependents' | 'authoredby';

  /**
   * A reference to a specific resource that defines which resources are
   * covered by this consent.
   */
  reference: Reference<Resource>;
}

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or
 * no) was verified with the patient, his/her family or another
 * authorized person.
 */
export interface ConsentVerification {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Has the instruction been verified.
   */
  verified: boolean;

  /**
   * Who verified the instruction (Patient, Relative or other Authorized
   * Person).
   */
  verifiedWith?: Reference<Patient | RelatedPerson>;

  /**
   * Date verification was collected.
   */
  verificationDate?: string;
}
