
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
   "address" VARCHAR(200) NOT NULL
);

-- date
-- start_time
-- end_time
CREATE TABLE "job" (
	"id" SERIAL PRIMARY KEY,
	"job_id" INT UNIQUE NOT NULL,
    "client_id" INT NOT NULL REFERENCES "user",
    "manager_id" INT REFERENCES "user",
    "cleaner_id" INT REFERENCES "user",
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
	"job_id" INT NOT NULL REFERENCES "job",
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
	"clean_hood_vent" BOOLEAN,
	"hood_vent_special_instructions" VARCHAR(255),
	"back_splash" BOOLEAN,
	"clean_stove_front" BOOLEAN,
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
	"job_id" INT NOT NULL REFERENCES "job",
	"room_type" VARCHAR(50) NOT NULL,
	"bathroom_type" VARCHAR(50) NOT NULL,
	"bath_shower_type" VARCHAR(50),
	"threshold_type" VARCHAR(50),
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
	"job_id" INT NOT NULL REFERENCES "job",
	"room_type" VARCHAR(50) NOT NULL,
	"floor_type" VARCHAR(50) NOT NULL,
	"wipe_surfaces" BOOLEAN NOT NULL,
	"clean_floor" BOOLEAN NOT NULL,
	"sq_ft" INT NOT NULL
);

CREATE TABLE "user_wipe_dust"(
	"id" SERIAL PRIMARY KEY,
	"job_id" INT NOT NULL REFERENCES "job",
	"wipe_clean_glass" BOOLEAN NOT NULL,
	"glass_door" BOOLEAN,
	"glass_door_number" INT,
	"inside_glass_door" BOOLEAN,
	"outside_glass_door" BOOLEAN,
	"glass_door_location" VARCHAR(500),
	"other_mirrors" BOOLEAN,
	"other_mirrors_number" INT,
	"other_mirrors_location" VARCHAR(500),
	"dust" BOOLEAN NOT NULL,
	"ceiling_lines_wall_lines_baseboards" BOOLEAN,
	"ceiling_fixtures" BOOLEAN,
	"swiffer_feather" VARCHAR(50),
	"window_blinds" BOOLEAN,
	"window_ledges" BOOLEAN,
	"window_sills" BOOLEAN,
	"picture_frames_wall_decor" BOOLEAN,
	"tops_decor_items" BOOLEAN,
	"pick_up_get_under" BOOLEAN,
	"electronics" BOOLEAN,
	"dust_other" BOOLEAN,
	"dust_other_instructions" VARCHAR(500),
	"dust_bed_living_furniture" BOOLEAN,
	"bed_living_furniture_duster" VARCHAR(50),
	"orange_glo_applicable" BOOLEAN
);

-- Job Table Mock Data
INSERT INTO "job" ("job_id", "client_id", "manager_id", "cleaner_id", "job_status", "feedback", "date", "start_time", "end_time")
VALUES (123456, 1, 6, 3, 'active', 'I am very happy with the clean your company provided, thank you!', '03-04-2023', '12:00', '4:00'),
(456789, 2, 6, 5, 'active', 'My cleaner did such a great job, and she was so communicative!', '04-10-2023', '10:00', '2:00'),
(135791, 4, 6, 5, 'active', 'The cleaner was very friendly', '04-24-2023', '9:00', '1:00');

-- GET Chat
-- NOTE: Will need to join with job table and 
-- and sort messages by job_id and whether its before
-- or the same day as the date to determine job_status

-- also need to check if job.client_id matches req.user.id
SELECT message_log.job_id, "timestamp", image_url, "text", job.client_id, job.manager_id, job.cleaner_id, job.job_status
FROM message_log
JOIN job ON job.job_id = message_log.job_id
WHERE message_log.job_id = 123456
ORDER BY TIMESTAMP ASC;

--POST CHAT
INSERT INTO "message_log" (job_id, "timestamp", image_url, "text", sender_id)
VALUES (123456, '03-13-2020', NULL, 'its my birthday', 1);

-- GET active job
SELECT * FROM "job"
WHERE "client_id" = 1 AND "job_status" = 'active';

-- SET user form_job_id
UPDATE "user" 
SET form_job_id = 394053
WHERE "user".id = 1;

-- GET bathroom forms
SELECT * FROM user_bathroom
        WHERE job_id = $1
        ORDER BY "order" ASC;

-- GET kitchen forms
SELECT * FROM user_kitchen
        WHERE job_id = $1
        ORDER BY "order" ASC;

-- GET other room forms
SELECT * FROM user_other_room
        WHERE job_id = $1
        ORDER BY "order" ASC;

-- GET wipe dust forms
SELECT * FROM user_wipe_dust
        WHERE job_id = $1
        ORDER BY "order" ASC;