
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- Phone number - string or int
-- TEMPORARY USER
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
     "password" VARCHAR (1000) NOT NULL,
     "first_name" VARCHAR(50) NOT NULL,
     "last_name" VARCHAR(50) NOT NULL,
     -- username is email address
     "username" VARCHAR(100) NOT NULL,
     "phone_number" VARCHAR(15) NOT NULL,
     "role" VARCHAR(20) NOT NULL,
     "address" VARCHAR(50) NOT NULL
);

-- date
-- start_time
-- end_time
CREATE TABLE "job" (
	"id" SERIAL PRIMARY KEY,
	"job_id" INT UNIQUE NOT NULL,
    "client_id" INT NOT NULL,
    "manager_id" INT,
    "cleaner_id" VARCHAR(50),
    "job_status" VARCHAR(50) NOT NULL,
    "feedback" VARCHAR(500),
    "date" DATE,
    "start_time" VARCHAR(20),
    "end_time" VARCHAR(50)
);

CREATE TABLE "message_log"(
	"id" SERIAL PRIMARY KEY,
	"job_id" INT NOT NULL,
    "timestamp" TIMESTAMP NOT NULL,
    "image_url" VARCHAR(100),
    "text" VARCHAR(500) NOT NULL
);

-- schema fix
-- every room should have a job_id and room_type
-- query rooms by job_id
CREATE TABLE "user_kitchen"(
	"id" SERIAL PRIMARY KEY,
	"job_id" INT NOT NULL,
	"room_type" VARCHAR(50) NOT NULL,
	"wipe_cabinets" BOOLEAN NOT NULL,
	"cabinet_spot_full_clean" VARCHAR(50),
	"cabinet_orange_glo" BOOLEAN,
	"wipe_appliances" BOOLEAN NOT NULL,
	"wipe_fridge" BOOLEAN,
	"fridge_stainless_steel" BOOLEAN,
	"wipe_dishwasher" BOOLEAN,
	"dishwasher_stainless_steel" BOOLEAN,
	"wipe_deep_freezer" BOOLEAN,
	"clean_microwave" BOOLEAN NOT NULL,
	"clean_stove_top" BOOLEAN NOT NULL,
	"type_of_stove" VARCHAR(100),
	"clean_hood_vent" BOOLEAN NOT NULL,
	"hood_vent_special_instructions" VARCHAR(255),
	"back_splash" BOOLEAN NOT NULL,
	"clean_stove_front" BOOLEAN NOT NULL,
	"stove_stainless_steel" BOOLEAN,
	"wipe_counters_sink" BOOLEAN NOT NULL,
	"granite_counter_tops" BOOLEAN,
	"sweep_mop_floor" BOOLEAN NOT NULL,
	"shake_rugs" BOOLEAN,
	"hardwood_floors" BOOLEAN,
	"specialty_flooring" BOOLEAN,
	"specialty_flooring_instructions" VARCHAR(500),
	"mop_location" VARCHAR(500)
);

CREATE TABLE "user_bathroom" (
	"id" SERIAL PRIMARY KEY,
	"job_id" INT NOT NULL,
	"room_type" VARCHAR(50) NOT NULL,
	"bathroom_type" VARCHAR(50) NOT NULL,
	"bath_shower_type" VARCHAR(50),
	"threshold_type" VARCHAR(50),
	"clean_jacuzzi" BOOLEAN NOT NULL,
	"clean_mirror" BOOLEAN NOT NULL,
	"number_mirrors_clean" INT,
	"clean_sink_counter" BOOLEAN NOT NULL,
	"granite_counter_tops" BOOLEAN,
	"sink_type" VARCHAR(50) NOT NULL,
	"clean_front_cabinets" BOOLEAN,
	"cabinet_spot_full_clean" VARCHAR(50),
	"cabinet_orange_glo" BOOLEAN,
	"clean_toilet" BOOLEAN NOT NULL,
	"take_out_trash" BOOLEAN NOT NULL,
	"take_out_trash_instructions" VARCHAR(500),
	"sweep_mop_floor" BOOLEAN NOT NULL,
	"shake_rugs" BOOLEAN
);
    
CREATE TABLE "user_other_room"(
	"id" SERIAL PRIMARY KEY,
	"job_id" INT NOT NULL,
	"room_type" VARCHAR(50) NOT NULL,
	"floor_type" VARCHAR(50) NOT NULL,
	"wipe_surfaces" BOOLEAN NOT NULL,
	"clean_floor" BOOLEAN NOT NULL,
	"sq_ft" INT NOT NULL
);