CREATE Type role_user AS ENUM('admin','user');

CREATE TABLE "cliente"(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
username VARCHAR(100) UNIQUE,
email VARCHAR(100),
password VARCHAR(250),
address VARCHAR(250),
role role_user DEFAULT'user',
pais VARCHAR(100) DEFAULT'España',
date_birth date
);

CREATE TABLE "empleado"(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
username VARCHAR(100) UNIQUE,
email VARCHAR(100),
address VARCHAR(250),
pais VARCHAR(100) DEFAULT'España',
departamento VARCHAR(100) DEFAULT'Ventas',
salario VARCHAR(100),
date_birth date
);

CREATE TABLE "Producto"(
id SERIAL PRIMARY KEY,
name VARCHAR(100),
description VARCHAR(1000),
price FLOAT,
stock INTEGER,
proveedor VARCHAR(100) DEFAULT'Alicorp'
);

CREATE TABLE "Ventas"(
id SERIAL PRIMARY KEY,
id_cliente INTEGER,
id_producto INTEGER,
cantidad INTEGER,
fecha_venta DATE
);

insert into "user" (first_name, last_name, username, email, password, address) values ('Gennie', 'Pinney', 'gpinney0', 'gpinney0@cdbaby.com', 'yL7/c>EthgvfH', 'PO Box 17432');
insert into "user" (first_name, last_name, username, email, password, address) values ('Kiley', 'Sturton', 'ksturton1', 'ksturton1@wufoo.com', 'iU1+nrU<U"$|1Ue', 'Suite 55');
insert into "user" (first_name, last_name, username, email, password, address) values ('Sloane', 'Butt Gow', 'sbuttgow2', 'sbuttgow2@tiny.cc', 'iJ9#OD.&yU7|', 'Apt 1130');
insert into "user" (first_name, last_name, username, email, password, address) values ('Glyn', 'Fife', 'gfife3', 'gfife3@ovh.net', 'cP6)W2XFpu', 'Apt 1980');
insert into "user" (first_name, last_name, username, email, password, address) values ('Kristian', 'Colebourne', 'kcolebourne4', 'kcolebourne4@apache.org', 'nY8?/4\w', 'Room 1382');
insert into "user" (first_name, last_name, username, email, password, address) values ('Doris', 'Duncan', 'dduncan5', 'dduncan5@oracle.com', 'sA7$U)zk@>Dn_),I', 'Suite 34');
insert into "user" (first_name, last_name, username, email, password, address) values ('Gianina', 'Westberg', 'gwestberg6', 'gwestberg6@sfgate.com', 'vI0_qJa,\SEvb(o', '11th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Abram', 'Monery', 'amonery7', 'amonery7@illinois.edu', 'iL9=a+xaC1scZ=Gd', 'Apt 1736');
insert into "user" (first_name, last_name, username, email, password, address) values ('Sadella', 'McMaster', 'smcmaster8', 'smcmaster8@fema.gov', 'sP7"F*JwzX+', '15th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Peder', 'Crimmins', 'pcrimmins9', 'pcrimmins9@aol.com', 'gI4"y*|<dPZ_t+LE', 'Suite 52');
insert into "user" (first_name, last_name, username, email, password, address) values ('Lainey', 'Cast', 'lcasta', 'lcasta@berkeley.edu', 'bQ1<1"7/0cr3C', 'Apt 220');
insert into "user" (first_name, last_name, username, email, password, address) values ('Orelle', 'Benian', 'obenianb', 'obenianb@vk.com', 'nJ1!9?L?3w4p', 'PO Box 33086');
insert into "user" (first_name, last_name, username, email, password, address) values ('Cassondra', 'Braden', 'cbradenc', 'cbradenc@huffingtonpost.com', 'tM2}Q/{u2U>UPn', 'Room 1360');
insert into "user" (first_name, last_name, username, email, password, address) values ('Olympia', 'Franciotti', 'ofranciottid', 'ofranciottid@nationalgeographic.com', 'sV5*x`&o+G#', 'Suite 62');
insert into "user" (first_name, last_name, username, email, password, address) values ('Othilie', 'Clemencon', 'oclemencone', 'oclemencone@people.com.cn', 'pI0#(w@zq}_wR''F.', '16th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Stu', 'Cresswell', 'scresswellf', 'scresswellf@netlog.com', 'kE8`{jn=VS', '2nd Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Rhianon', 'Satterlee', 'rsatterleeg', 'rsatterleeg@altervista.org', 'iX4?_ALi36?c@D', 'Apt 1784');
insert into "user" (first_name, last_name, username, email, password, address) values ('Andi', 'Connett', 'aconnetth', 'aconnetth@cmu.edu', 'jT7\R0KG3%sikc', 'Room 1317');
insert into "user" (first_name, last_name, username, email, password, address) values ('Nickolai', 'Philp', 'nphilpi', 'nphilpi@hubpages.com', 'kD2&$C$kJ', 'Room 477');
insert into "user" (first_name, last_name, username, email, password, address) values ('Doug', 'Gullane', 'dgullanej', 'dgullanej@answers.com', 'bB2''|ATgG,RN3!f', '6th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Gwynne', 'Pickard', 'gpickardk', 'gpickardk@livejournal.com', 'nA8{@a,6', 'Suite 70');
insert into "user" (first_name, last_name, username, email, password, address) values ('Loutitia', 'Wormell', 'lwormelll', 'lwormelll@about.com', 'jE1%iwY''!ci', 'PO Box 50645');
insert into "user" (first_name, last_name, username, email, password, address) values ('Charmian', 'Spiby', 'cspibym', 'cspibym@so-net.ne.jp', 'wB9?6Hiq>', '4th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Lyssa', 'Sharratt', 'lsharrattn', 'lsharrattn@woothemes.com', 'aQ3)Y0dHr8<', '8th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Kenon', 'Lamanby', 'klamanbyo', 'klamanbyo@moonfruit.com', 'hP3=TW"Hy&}L!7Dy', '10th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Desiree', 'Pegden', 'dpegdenp', 'dpegdenp@webs.com', 'dG0\(C''z9ITnM5', 'Suite 12');
insert into "user" (first_name, last_name, username, email, password, address) values ('Janela', 'Torrejon', 'jtorrejonq', 'jtorrejonq@ted.com', 'mZ0"/yO9', 'Suite 31');
insert into "user" (first_name, last_name, username, email, password, address) values ('Calv', 'Wolland', 'cwollandr', 'cwollandr@netvibes.com', 'qV7?qMQ(p', 'PO Box 77115');
insert into "user" (first_name, last_name, username, email, password, address) values ('Doreen', 'Filimore', 'dfilimores', 'dfilimores@deliciousdays.com', 'uT6/gq~o$J7)4', '9th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Dael', 'D''Ruel', 'ddruelt', 'ddruelt@sfgate.com', 'oZ9`G1A3', 'Apt 946');
insert into "user" (first_name, last_name, username, email, password, address) values ('Edan', 'Mainwaring', 'emainwaringu', 'emainwaringu@springer.com', 'yQ0|w8VOM0sHypp8', 'Room 863');
insert into "user" (first_name, last_name, username, email, password, address) values ('Wilfrid', 'Yarnell', 'wyarnellv', 'wyarnellv@ow.ly', 'nL1%U,DSZW', 'Apt 917');
insert into "user" (first_name, last_name, username, email, password, address) values ('Paddy', 'McLukie', 'pmclukiew', 'pmclukiew@sciencedirect.com', 'mF8)4Ys<6)e', 'Room 1362');
insert into "user" (first_name, last_name, username, email, password, address) values ('Georgia', 'Crandon', 'gcrandonx', 'gcrandonx@sciencedirect.com', 'pT3(g=mA,O%~5', 'Suite 58');
insert into "user" (first_name, last_name, username, email, password, address) values ('Wendall', 'Atthowe', 'watthowey', 'watthowey@europa.eu', 'nS3$Jr(UpP1', 'PO Box 78857');
insert into "user" (first_name, last_name, username, email, password, address) values ('Tedman', 'Sharpin', 'tsharpinz', 'tsharpinz@guardian.co.uk', 'cC4&LT''>2AGI', 'PO Box 98608');
insert into "user" (first_name, last_name, username, email, password, address) values ('Estevan', 'Borrott', 'eborrott10', 'eborrott10@etsy.com', 'cX1''}tLjQHD+~_', 'Suite 5');
insert into "user" (first_name, last_name, username, email, password, address) values ('Karly', 'Kielty', 'kkielty11', 'kkielty11@ow.ly', 'kX7(X~QAAW@d<*''#', 'PO Box 69383');
insert into "user" (first_name, last_name, username, email, password, address) values ('Marylynne', 'Swindall', 'mswindall12', 'mswindall12@friendfeed.com', 'gD6#Gz!NlA6', 'Apt 915');
insert into "user" (first_name, last_name, username, email, password, address) values ('Cora', 'Janc', 'cjanc13', 'cjanc13@ow.ly', 'lD2{@C+Q_x', 'Suite 97');
insert into "user" (first_name, last_name, username, email, password, address) values ('Thomas', 'Dugget', 'tdugget14', 'tdugget14@hostgator.com', 'vY1\HB4P(', 'Apt 961');
insert into "user" (first_name, last_name, username, email, password, address) values ('Leslie', 'Gladwish', 'lgladwish15', 'lgladwish15@blogspot.com', 'dQ6.h%&J5lGVFC', '7th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Ema', 'Deeble', 'edeeble16', 'edeeble16@yahoo.co.jp', 'uJ2+!%/5vjhYN{M', 'Suite 26');
insert into "user" (first_name, last_name, username, email, password, address) values ('Julita', 'Bissell', 'jbissell17', 'jbissell17@slideshare.net', 'xR5(e~Fg+SDt', 'Room 1602');
insert into "user" (first_name, last_name, username, email, password, address) values ('Pepito', 'Corbie', 'pcorbie18', 'pcorbie18@rakuten.co.jp', 'bA1!97ss', '12th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Aundrea', 'Walasik', 'awalasik19', 'awalasik19@yellowbook.com', 'aQ2>9O4j', 'Room 869');
insert into "user" (first_name, last_name, username, email, password, address) values ('Daryl', 'Carress', 'dcarress1a', 'dcarress1a@wp.com', 'eO3$?/Mc)()g', '16th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Geneva', 'Soughton', 'gsoughton1b', 'gsoughton1b@whitehouse.gov', 'zE9$tzugPuvKom', 'PO Box 40049');
insert into "user" (first_name, last_name, username, email, password, address) values ('Mari', 'Moir', 'mmoir1c', 'mmoir1c@creativecommons.org', 'zJ0|EJ(H(&~&3\', 'PO Box 58607');
insert into "user" (first_name, last_name, username, email, password, address) values ('Serena', 'Leah', 'sleah1d', 'sleah1d@linkedin.com', 'bX2_hzz(=gT2@#O', 'Room 1067');
insert into "user" (first_name, last_name, username, email, password, address) values ('Pietrek', 'Simpkin', 'psimpkin1e', 'psimpkin1e@dot.gov', 'dX1''Wx!(pLnfPX''', '6th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Ash', 'Heineken', 'aheineken1f', 'aheineken1f@wikimedia.org', 'iQ1(W=0kRhq9', 'Suite 50');
insert into "user" (first_name, last_name, username, email, password, address) values ('Braden', 'Corneck', 'bcorneck1g', 'bcorneck1g@wufoo.com', 'rA3)UdkIXRcM*', 'Room 1297');
insert into "user" (first_name, last_name, username, email, password, address) values ('Lanny', 'Joly', 'ljoly1h', 'ljoly1h@senate.gov', 'rW9''ZL?/p', '1st Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Amandi', 'Schroder', 'aschroder1i', 'aschroder1i@nhs.uk', 'sA1,qad*6oWX', 'Apt 637');
insert into "user" (first_name, last_name, username, email, password, address) values ('Fanni', 'Deplacido', 'fdeplacido1j', 'fdeplacido1j@spotify.com', 'tF1/w4n(gSF(', 'Apt 700');
insert into "user" (first_name, last_name, username, email, password, address) values ('Annabela', 'Varnam', 'avarnam1k', 'avarnam1k@amazon.com', 'zL2_eqr(h', 'Suite 25');
insert into "user" (first_name, last_name, username, email, password, address) values ('Jaquenette', 'Breukelman', 'jbreukelman1l', 'jbreukelman1l@cdbaby.com', 'mB0,o4JsX_Cg8g#L', 'Suite 7');
insert into "user" (first_name, last_name, username, email, password, address) values ('Dasie', 'Eltone', 'deltone1m', 'deltone1m@alexa.com', 'cH6@&Li(zS.Guct', '1st Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Eleonore', 'Walework', 'ewalework1n', 'ewalework1n@springer.com', 'pF4%~MDzU)Sz', 'Suite 20');
insert into "user" (first_name, last_name, username, email, password, address) values ('Humfrey', 'Janauschek', 'hjanauschek1o', 'hjanauschek1o@youtu.be', 'xR8#u*0x', 'PO Box 72085');
insert into "user" (first_name, last_name, username, email, password, address) values ('Toma', 'Caesmans', 'tcaesmans1p', 'tcaesmans1p@chronoengine.com', 'gR3&TtdQb', 'Suite 13');
insert into "user" (first_name, last_name, username, email, password, address) values ('Moises', 'Minchinton', 'mminchinton1q', 'mminchinton1q@google.com.au', 'yU8@l~0kjR&*8*v', 'Suite 61');
insert into "user" (first_name, last_name, username, email, password, address) values ('Papagena', 'Woolway', 'pwoolway1r', 'pwoolway1r@hp.com', 'dM4&2~zp*', 'PO Box 27776');
insert into "user" (first_name, last_name, username, email, password, address) values ('Tobie', 'Goodbarr', 'tgoodbarr1s', 'tgoodbarr1s@cyberchimps.com', 'kG2"x.N7HR', '20th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Elliot', 'Dargan', 'edargan1t', 'edargan1t@sphinn.com', 'qY4#P+.@(@f', 'Suite 28');
insert into "user" (first_name, last_name, username, email, password, address) values ('Carilyn', 'Kulver', 'ckulver1u', 'ckulver1u@quantcast.com', 'pP3#=OfgKFO>IEG', '19th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Tobias', 'Bernaciak', 'tbernaciak1v', 'tbernaciak1v@china.com.cn', 'aJ4.+kE4Rr@', 'PO Box 84170');
insert into "user" (first_name, last_name, username, email, password, address) values ('Audra', 'Keble', 'akeble1w', 'akeble1w@spotify.com', 'dE1,>3M&''mPxWXT', 'Room 195');
insert into "user" (first_name, last_name, username, email, password, address) values ('Blair', 'Shutle', 'bshutle1x', 'bshutle1x@mtv.com', 'hX0}M5#9', '17th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Purcell', 'Ducaen', 'pducaen1y', 'pducaen1y@ucoz.com', 'fF8?(Yxh', 'Apt 652');
insert into "user" (first_name, last_name, username, email, password, address) values ('Philippa', 'Peealess', 'ppeealess1z', 'ppeealess1z@123-reg.co.uk', 'nL5$wgYV}OnG', 'Suite 2');
insert into "user" (first_name, last_name, username, email, password, address) values ('Maddalena', 'Hamber', 'mhamber20', 'mhamber20@cornell.edu', 'uX8<g`f_!|>+ec', 'PO Box 19416');
insert into "user" (first_name, last_name, username, email, password, address) values ('Liam', 'Maggs', 'lmaggs21', 'lmaggs21@sciencedirect.com', 'mA2?qj_\X3A', 'Suite 60');
insert into "user" (first_name, last_name, username, email, password, address) values ('Heather', 'Treffrey', 'htreffrey22', 'htreffrey22@cnn.com', 'gR5&/=b#JxCKK9', 'PO Box 20342');
insert into "user" (first_name, last_name, username, email, password, address) values ('Immanuel', 'Keer', 'ikeer23', 'ikeer23@dagondesign.com', 'mV1!''oW{', 'PO Box 58187');
insert into "user" (first_name, last_name, username, email, password, address) values ('Lisetta', 'Peploe', 'lpeploe24', 'lpeploe24@opera.com', 'iI3@pO.FLT+W', 'Suite 18');
insert into "user" (first_name, last_name, username, email, password, address) values ('Matteo', 'Sink', 'msink25', 'msink25@last.fm', 'cR5$o\l!6s$D<ND', 'PO Box 86651');
insert into "user" (first_name, last_name, username, email, password, address) values ('Aubree', 'Vanyushin', 'avanyushin26', 'avanyushin26@edublogs.org', 'sB1$t9DuC+', '17th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Boony', 'Youson', 'byouson27', 'byouson27@zdnet.com', 'vN4_(&|K', 'PO Box 38981');
insert into "user" (first_name, last_name, username, email, password, address) values ('Valerie', 'Kintzel', 'vkintzel28', 'vkintzel28@hp.com', 'yJ3`n*olq_Q!B4Q', '13th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Carlotta', 'Duesberry', 'cduesberry29', 'cduesberry29@illinois.edu', 'oM9|CYC''.O6I2XE{', 'Room 1342');
insert into "user" (first_name, last_name, username, email, password, address) values ('Giulio', 'Croasdale', 'gcroasdale2a', 'gcroasdale2a@engadget.com', 'wI2<P4L|c', '11th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Walsh', 'Ramard', 'wramard2b', 'wramard2b@globo.com', 'zK4''uiqw=)N', '19th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Bryce', 'Aharoni', 'baharoni2c', 'baharoni2c@com.com', 'hU6,xwm`f"4QptDR', 'Suite 79');
insert into "user" (first_name, last_name, username, email, password, address) values ('Perrine', 'Rivenzon', 'privenzon2d', 'privenzon2d@vk.com', 'lK8&zOO*dL@!bGh~', 'Room 902');
insert into "user" (first_name, last_name, username, email, password, address) values ('Cordell', 'Lean', 'clean2e', 'clean2e@creativecommons.org', 'hF7|)G.Q~uPR.da', 'Suite 19');
insert into "user" (first_name, last_name, username, email, password, address) values ('Dinah', 'Barehead', 'dbarehead2f', 'dbarehead2f@patch.com', 'qI8\Oswgo{M$3.2n', 'Room 1584');
insert into "user" (first_name, last_name, username, email, password, address) values ('Jo', 'Lude', 'jlude2g', 'jlude2g@addtoany.com', 'hK7,EFl(X', 'Apt 1444');
insert into "user" (first_name, last_name, username, email, password, address) values ('Mile', 'Chatwood', 'mchatwood2h', 'mchatwood2h@stanford.edu', 'kM3/@@V58*IM\#6u', 'Suite 8');
insert into "user" (first_name, last_name, username, email, password, address) values ('Mark', 'Sinton', 'msinton2i', 'msinton2i@msn.com', 'cV9$<2p@', 'Apt 877');
insert into "user" (first_name, last_name, username, email, password, address) values ('Consalve', 'Sharville', 'csharville2j', 'csharville2j@microsoft.com', 'rW1+dbPwH)8V{wJ', 'PO Box 54088');
insert into "user" (first_name, last_name, username, email, password, address) values ('Josefa', 'Fishpoole', 'jfishpoole2k', 'jfishpoole2k@whitehouse.gov', 'lF5_~1mN\', 'Suite 64');
insert into "user" (first_name, last_name, username, email, password, address) values ('Horton', 'Scorer', 'hscorer2l', 'hscorer2l@upenn.edu', 'iW1}RIepN{!KWxW_', 'Room 1115');
insert into "user" (first_name, last_name, username, email, password, address) values ('Lisha', 'Amdohr', 'lamdohr2m', 'lamdohr2m@histats.com', 'qV1&pZF5}@', 'Room 1196');
insert into "user" (first_name, last_name, username, email, password, address) values ('Geno', 'Lorek', 'glorek2n', 'glorek2n@artisteer.com', 'oF3''*jgYZz', 'Room 921');
insert into "user" (first_name, last_name, username, email, password, address) values ('Ricca', 'Piel', 'rpiel2o', 'rpiel2o@themeforest.net', 'vM6$0eFSP9X', 'Apt 133');
insert into "user" (first_name, last_name, username, email, password, address) values ('Reynard', 'Windous', 'rwindous2p', 'rwindous2p@umich.edu', 'lI9,Px|K*RFeb,i', 'Suite 62');
insert into "user" (first_name, last_name, username, email, password, address) values ('Juli', 'Knapman', 'jknapman2q', 'jknapman2q@auda.org.au', 'vX2"yY`a<h{rD', '15th Floor');
insert into "user" (first_name, last_name, username, email, password, address) values ('Ede', 'Christofol', 'echristofol2r', 'echristofol2r@nature.com', 'tI3+*e(EO+R5Lapo', 'Room 1177');

insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Lolly', 'Cady', 'lcady0', 'lcady0@netvibes.com', 'pP0@Ei/ZJVt@4t', 'Room 1929', 'Poland', '1986-10-07');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Mallissa', 'Pennyman', 'mpennyman1', 'mpennyman1@cafepress.com', 'pJ9/yunBt', 'Apt 1277', 'Russia', '1990-02-08');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Flss', 'Bunworth', 'fbunworth2', 'fbunworth2@discovery.com', 'aY7+ZguUF%`#', 'Suite 48', 'China', '1982-01-14');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Lilly', 'Burle', 'lburle3', 'lburle3@tamu.edu', 'tG3/2k"|AeU', 'PO Box 35599', 'China', '1970-12-05');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Hyacinthe', 'Tofanelli', 'htofanelli4', 'htofanelli4@amazon.co.jp', 'fO7?0sY>la''\coq', '14th Floor', 'China', '2000-03-04');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Vinson', 'Caldes', 'vcaldes5', 'vcaldes5@yale.edu', 'nQ1{w0P#39o', 'Apt 873', 'Panama', '1999-10-17');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Wells', 'Ure', 'wure6', 'wure6@imgur.com', 'qL6*CPkflT(v', 'Suite 71', 'Bulgaria', '1998-10-13');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Andriette', 'Foottit', 'afoottit7', 'afoottit7@last.fm', 'nN2@YG,aW/(u', 'Apt 231', 'Indonesia', '1997-07-19');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Nelli', 'Pimlett', 'npimlett8', 'npimlett8@microsoft.com', 'tS1.+Q,"Rl', 'Apt 409', 'Guatemala', '1980-06-25');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Barb', 'Sidey', 'bsidey9', 'bsidey9@elegantthemes.com', 'gD7\e9$}Q?<', 'Room 1830', 'Indonesia', '1974-03-12');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Willa', 'Rollinson', 'wrollinsona', 'wrollinsona@simplemachines.org', 'nR3>c*o''*jLD*Xc', 'Room 1145', 'Belarus', '1972-05-24');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Cullen', 'O''Daly', 'codalyb', 'codalyb@indiatimes.com', 'gX5.0}Mm6W(=', 'Room 1432', 'Republic of the Congo', '1994-05-12');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Gherardo', 'Ettery', 'getteryc', 'getteryc@google.com.au', 'vZ0!O4tjt*#BX_6&', '19th Floor', 'Brazil', '1994-10-23');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Britt', 'Wadham', 'bwadhamd', 'bwadhamd@netvibes.com', 'eG3~ZSXC', 'Apt 1590', 'Indonesia', '1971-06-09');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Angel', 'Dupey', 'adupeye', 'adupeye@stumbleupon.com', 'aT5+_*=~CE', 'Apt 657', 'Lesotho', '1971-09-22');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Hollyanne', 'Huxtable', 'hhuxtablef', 'hhuxtablef@springer.com', 'nV8//XEU', '16th Floor', 'Cuba', '1980-06-01');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Domingo', 'McCall', 'dmccallg', 'dmccallg@tamu.edu', 'dM5_D`y/E|', 'Apt 1252', 'China', '1997-10-28');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Kirstin', 'Hayfield', 'khayfieldh', 'khayfieldh@miitbeian.gov.cn', 'wJ3`&Vk1', 'Suite 93', 'Portugal', '1991-09-11');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Glynis', 'Tattersill', 'gtattersilli', 'gtattersilli@stumbleupon.com', 'xR7%inPz%Z91', 'Apt 944', 'Armenia', '1971-05-03');
insert into "cliente" (first_name, last_name, username, email, password, address, pais, date_birth) values ('Estrella', 'Leathart', 'eleathartj', 'eleathartj@gmpg.org', 'kC8{~l1"gl', 'Apt 1199', 'China', '1977-11-28');

insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Berti', 'Edinburough', 'bedinburough0', 'bedinburough0@oracle.com', 'Apt 451', 'China', 1242, '1998-11-26');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Casi', 'Singers', 'csingers1', 'csingers1@stumbleupon.com', '6th Floor', 'Iran', 1158, '1989-08-28');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Timoteo', 'Dyka', 'tdyka2', 'tdyka2@cnet.com', 'PO Box 73398', 'Indonesia', 1523, '1994-10-29');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Elaine', 'Meeking', 'emeeking3', 'emeeking3@smugmug.com', 'PO Box 17267', 'China', 1991, '1980-07-17');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Rozalie', 'Fennelow', 'rfennelow4', 'rfennelow4@drupal.org', '13th Floor', 'France', 1217, '1993-09-01');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Belle', 'Backshall', 'bbackshall5', 'bbackshall5@stumbleupon.com', '16th Floor', 'Uruguay', 1855, '1977-12-31');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Sonnnie', 'Jakubczyk', 'sjakubczyk6', 'sjakubczyk6@geocities.jp', 'Suite 60', 'Peru', 1414, '1997-08-04');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Nolana', 'Pickthorn', 'npickthorn7', 'npickthorn7@theglobeandmail.com', 'PO Box 36239', 'Czech Republic', 1276, '1976-06-21');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Demetris', 'Gisbourn', 'dgisbourn8', 'dgisbourn8@weibo.com', 'Room 1899', 'China', 1224, '1971-02-22');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Raven', 'Cahen', 'rcahen9', 'rcahen9@vk.com', 'Apt 168', 'China', 1621, '1986-01-05');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Dione', 'Ducarne', 'dducarnea', 'dducarnea@wikipedia.org', 'Room 1989', 'United States', 1673, '1980-08-18');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Bevvy', 'Boultwood', 'bboultwoodb', 'bboultwoodb@kickstarter.com', 'Suite 86', 'Sweden', 1849, '1992-10-23');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Ricardo', 'Santus', 'rsantusc', 'rsantusc@godaddy.com', 'PO Box 63766', 'Netherlands', 1039, '1971-02-21');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Pandora', 'Croll', 'pcrolld', 'pcrolld@tinypic.com', 'Apt 1827', 'Canada', 1531, '1982-08-19');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Illa', 'Fancett', 'ifancette', 'ifancette@tmall.com', '1st Floor', 'Portugal', 1820, '2000-01-14');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Otho', 'McClancy', 'omcclancyf', 'omcclancyf@buzzfeed.com', 'PO Box 53284', 'China', 1303, '1989-03-12');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Adele', 'Dresse', 'adresseg', 'adresseg@woothemes.com', 'PO Box 29330', 'China', 1738, '1978-01-30');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Easter', 'Oliphard', 'eoliphardh', 'eoliphardh@fda.gov', 'Room 530', 'Indonesia', 1620, '1989-01-25');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Irvin', 'Wrintmore', 'iwrintmorei', 'iwrintmorei@dyndns.org', 'Apt 641', 'China', 1153, '1972-11-20');
insert into "empleado" (first_name, last_name, username, email, address, pais, salario, date_birth) values ('Oates', 'Melesk', 'omeleskj', 'omeleskj@mac.com', '4th Floor', 'Portugal', 1247, '1996-12-27');

insert into "Producto" (name, price, stock, Proveedor) values ('Bread - Pumpernickel', 9, 87, 'Kazio');
insert into "Producto" (name, price, stock, Proveedor) values ('Dates', 14, 79, 'Twitterbridge');
insert into "Producto" (name, price, stock, Proveedor) values ('Pie Filling - Apple', 16, 43, 'Trudeo');
insert into "Producto" (name, price, stock, Proveedor) values ('Chives - Fresh', 12, 27, 'Oloo');
insert into "Producto" (name, price, stock, Proveedor) values ('Rabbit - Frozen', 15, 92, 'Fatz');
insert into "Producto" (name, price, stock, Proveedor) values ('Soup Knorr Chili With Beans', 14, 13, 'Rhycero');
insert into "Producto" (name, price, stock, Proveedor) values ('Beets', 19, 76, 'Voonix');
insert into "Producto" (name, price, stock, Proveedor) values ('Soup - Campbells, Creamy', 2, 11, 'Reallinks');
insert into "Producto" (name, price, stock, Proveedor) values ('Chicken Breast Wing On', 2, 94, 'Thoughtstorm');
insert into "Producto" (name, price, stock, Proveedor) values ('Okra', 9, 79, 'Zooveo');
insert into "Producto" (name, price, stock, Proveedor) values ('Beer - Sleemans Cream Ale', 11, 1, 'Mydo');
insert into "Producto" (name, price, stock, Proveedor) values ('Truffle Cups - Red', 14, 43, 'Flashset');
insert into "Producto" (name, price, stock, Proveedor) values ('Pepper - Yellow Bell', 16, 27, 'Aibox');
insert into "Producto" (name, price, stock, Proveedor) values ('Wine - Jaboulet Cotes Du Rhone', 7, 39, 'Shuffledrive');
insert into "Producto" (name, price, stock, Proveedor) values ('Gatorade - Cool Blue Raspberry', 12, 57, 'Mydeo');
insert into "Producto" (name, price, stock, Proveedor) values ('The Pop Shoppe - Black Cherry', 16, 17, 'Pixonyx');
insert into "Producto" (name, price, stock, Proveedor) values ('Sterno - Chafing Dish Fuel', 1, 20, 'Riffpath');
insert into "Producto" (name, price, stock, Proveedor) values ('Pork - Back, Short Cut, Boneless', 7, 21, 'Vipe');
insert into "Producto" (name, price, stock, Proveedor) values ('Wine - White, Mosel Gold', 7, 5, 'Realbridge');
insert into "Producto" (name, price, stock, Proveedor) values ('Cake - Pancake', 12, 19, 'Fiveclub');


insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (18, 9, 3, '2023-07-08');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (6, 18, 5, '2023-07-08');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (3, 17, 3, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (10, 1, 2, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (16, 9, 4, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (13, 12, 5, '2023-07-08');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (18, 13, 1, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (19, 3, 3, '2023-07-08');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (1, 18, 5, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (4, 16, 4, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (11, 19, 4, '2023-07-08');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (9, 9, 1, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (4, 7, 1, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (11, 2, 4, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (9, 2, 5, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (14, 3, 1, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (1, 5, 4, '2023-07-07');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (3, 11, 2, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (19, 9, 3, '2023-07-09');
insert into "Ventas" (id_cliente, id_producto, cantidad, fecha_venta) values (19, 15, 1, '2023-07-09');

select * from "cliente";
select * from "Producto";
select * from "Ventas";
select * from "empleado";

select first_name, last_name from "user" where role='admin' 
ORDER BY last_name ASC;

SELECT NOW();


select first_name, last_name from "cliente" where pais='España';

select name from "Producto" ORDER BY "name" ASC;

select AVG(price) from "Producto";

Select "name",stock from "Producto" where price>=100;

select first_name from "empleado" where CAST(salario as INTEGER) >= 50000;

select first_name, last_name from "empleado" where departamento='Ventas';

select SUM(CAST(salario as INTEGER)) from "empleado";

SELECT "Producto".name, SUM("Ventas".cantidad*"Producto".price)
FROM "Ventas"
INNER JOIN "Producto"
  ON "Ventas".id_producto="Producto".id
  GROUP BY "Producto".name;
  
SELECT first_name, last_name from empleado where SUBSTRING(first_name,1,1)='J';

SELECT 
    AVG(
        CAST(
            SUBSTRING(
                CAST(
                    AGE( NOW(), date_birth) 
                AS VARCHAR),
                1,
                3
            )
        AS INTEGER)
    ) AS AGE
FROM cliente 
WHERE date_birth IS NOT NULL;

select "name" from "Producto" where description ~ 'azul';


select "name", proveedor from "Producto" order by "name" asc;

select "name", stock from "Producto" where stock < 10;

SELECT "Producto".name, SUM("Ventas".cantidad)
FROM "Ventas"
INNER JOIN "Producto"
ON "Ventas".id_producto="Producto".id
GROUP BY "Producto".name
HAVING SUM("Ventas".cantidad)<100 AND SUM("Ventas".cantidad)>50;

SELECT SUM(price) from "Producto";

SELECT cliente.first_name, "Producto".name
FROM "Ventas"
INNER JOIN cliente
  ON "Ventas".id_cliente = cliente.id
INNER JOIN "Producto"
  ON "Ventas".id_producto = "Producto".id;
  
SELECT first_name, last_name from empleado where EXTRACT(YEAR FROM date_birth)<1980;

SELECT "Producto".name, SUM("Ventas".cantidad)
FROM "Ventas"
INNER JOIN "Producto"
ON "Ventas".id_producto="Producto".id
GROUP BY "Producto".name
ORDER BY SUM("Ventas".cantidad) DESC;

SELECT cliente.first_name, "Producto".name
FROM "Ventas"
INNER JOIN cliente
  ON "Ventas".id_cliente = cliente.id
INNER JOIN "Producto"
  ON "Ventas".id_producto = "Producto".id
WHERE EXTRACT(MONTH FROM fecha_venta ) = EXTRACT(MONTH FROM NOW());


