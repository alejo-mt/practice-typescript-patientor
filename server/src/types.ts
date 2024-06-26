interface BaseEntry {
    id: string;
    date: string;
    description: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis["code"]>;
}

export type NewEntry =
    | Omit<HealthCheckEntry, "id">
    | Omit<OccupationalHealthcareEntry, "id">
    | Omit<HospitalEntry, "id">;

export type Entry =
    | HealthCheckEntry
    | OccupationalHealthcareEntry
    | HospitalEntry;

interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: {
        startDate: string;
        endDate: string;
    };
}

export interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge?: {
        date: string;
        criteria: string;
    };
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3,
}

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type NonSensitivePatients = Omit<Patient, "ssn" | "entries">;
export type NewPatient = Omit<Patient, "id">;
