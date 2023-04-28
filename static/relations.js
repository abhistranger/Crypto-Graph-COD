// relations

var primitives = [];
var problems = [];
var implications = [];
var separations = [];
var implications_with_extra_assum = [];

var PRIM = function(id, title) {
  primitives.push({id: id, title: title});
};

var PROB = function(id, title) {
  problems.push({id: id, title: title});
};

var IMPLIES = function(from, to, refid) {
  implications.push({from: from, to: to, refid: refid});
};

var EQUALS = function(from, to, refid) {
  IMPLIES(from, to, refid);
  IMPLIES(to, from, refid);
};

var BBSEP = function(from, to, refid) {
  separations.push({from: from, to: to, refid: refid});
};

var IMPLIESWITHEXTRAASSUM = function(from, to, refid) {
  implications_with_extra_assum.push({from: from, to: to, refid: refid});
};

// var IMPLIESWITHEXTRAASSUM = function(from1, from2,  to, refid) {
//   implications_with_extra_assum.push({from1: from1, from2: from2, to: to, refid: refid});
// };

// nodes (primitives & problems)
//tbi include definitions of these primitives on the web page

// computational problems
// PROB('FACTOR', 'Factoring');
// PROB('RSA', 'Rivest Shamir Adleman');
// PROB('DLOG', 'Discrete Logarithm');
// PROB('CDH', 'Computational Diffie Hellmann');
// PROB('DDH', 'Decisional Diffie Hellmann');
// // PROB('HSP', 'Hidden Subgroup Problem');
// PROB('SVP', 'Shortest Vector Problem');
// PROB('LWE', 'Learning with Errors');

// var nodeIds = nodes_all.getIds();
// for (id in nodeIds) {
//   nodes_all.update({id: nodeIds[id], fixed: true, x: id * 10, y: id * 60,});
//   if (id > 1) break;
// }

// primitives
// PRIM('OWP','One-Way Permutation');
// PRIM('TDP', 'Trapdoor Permutation');
// PRIM('OWF', 'One-Way Function');
// PRIM('PRNG', 'Pseudo-Random Number Generator');
// PRIM('PRF', 'Pseudo-Random Function');
// PRIM('PRP', 'Pseudo-Random Permutation');
// PRIM('CRHF', 'Collision-Resistant Hash Function');
// PRIM('COM', 'Commitment');
// PRIM('NI-COM', 'Non-Interactive Commitment');
// PRIM('SH-COM', 'Statistically-Hiding Commitment');
// PRIM('HE', 'Homomorphic Encryption');
// PRIM('SKE', 'Secret-Key Encryption');
// PRIM('PKE', 'Public-Key Encryption');
// //PRIM('CCA-PKE', 'Chosen Ciphertext Attack Secure Public-Key Encryption');
// PRIM('OT', 'Oblivious Transfer');
// //PRIM('IO', 'Indisitinguishability Obfuscation');
// PRIM('CFP', 'Claw-Free Permutation');
// PRIM('CF-TDP', 'Claw-Free Trapdoor Permutation');
// PRIM('CPA-SIG', 'Chosen Plaintext Attack Secure Digital Signature');
// PRIM('EB-COM', 'Extractable-Binding Commitment');
// PRIM('CB-COM', 'Collapse-Binding Commitment');
// PRIM('ECRH', 'Extractable Collision-Resistant Hash Function');
// PRIM('PIR', 'Private Information Retrieval');
// PRIM('LTDF', 'Lossy Trapdoor Function');
// PRIM('ITDF', 'Injective Trapdoor Function');
// PRIM('TDF', 'Trapdoor Function');
// PRIM('KA', 'Key Agreement');

PRIM('CPA', 'Chosen Plaintext Attack Secure Public-Key Encryption');
PRIM('CCA', 'Chosen Ciphertext Attack Secure Public-Key Encryption');
PRIM('IND-q-CCA', 'Indistinguishable q-bounded CCA Secure');
PRIM('NM-CPA', 'Non-malleable CPA Secure');
PRIM('NM-q-CCA', 'Non-maleable q-bounded CCA Secure');
PRIM('Full IBE', 'Full Identity based Encryption');
PRIM('Weakly Compact IBE', 'Weakly Compact Identity Based Encryption');
PRIM('Non-Compact IBE', 'Non-Compact Identity Based Encryption');
PRIM('INCOMP CCA', 'Incompressible CCA Secure');
PRIM('1-bit CCA', '1-bit Chosen Ciphertext Attack Secure Public-Key Encryption');
PRIM('DCCA', 'Detectable CCA');
PRIM('HPRG', 'Hinting Pseudo-Random Number Generator');

//realations of primitives
IMPLIESWITHEXTRAASSUM('CPA', 'CCA', '');
// IMPLIESWITHEXTRAASSUM('CPA', 'HPRG', 'CCA', '');
IMPLIES('CPA', 'IND-q-CCA', 'cramer2007qboundedCCA');
IMPLIES('CPA', 'NM-CPA', 'rafel2006nmcpa');
IMPLIES('CPA', 'NM-q-CCA', 'cramer2007qboundedCCA');
IMPLIES('CPA', 'Non-Compact IBE', '');
IMPLIES('Weakly Compact IBE', 'Full IBE');
IMPLIES('Full IBE', 'CCA');
IMPLIES('1-bit CCA', 'CCA');


// relations of primitives
// EQUALS('OWF', 'PRNG', 'hastad1999pseudorandom');
// BBSEP('OWF', 'OWP', 'rudich1984limits');
// BBSEP('OWP', 'KA', 'impagliazzo1989limits');
// BBSEP('OWF', 'NI-COM', 'mahmoody2012curious');
// EQUALS('OWF', 'CPA-SIG', 'rompel1990oneway');
// IMPLIES('OWF', 'SH-COM', 'haitner2007statistically');
// IMPLIES('OWF', 'PRF', 'goldreich1986construct');
// BBSEP('OWP', 'CRHF', 'simon1998finding');
// IMPLIES('OWP', 'NI-COM', 'mahmoody2012curious');
// IMPLIES('OWP', 'OWF');
// // IMPLIES('OWP', 'PRNG', 'yao1982theory');
// IMPLIES('OWP', 'CPA-SIG', 'naor1989universal');
// IMPLIES('CRHF', 'NI-COM', 'halevi1996practical');
// IMPLIES('HE', 'CRHF', 'ishai2005sufficient');
// IMPLIES('HE', 'PIR', 'ishai2005sufficient');
// IMPLIES('PIR', 'CRHF', 'ishai2005sufficient');
// IMPLIES('PIR', 'OT', 'crescenzo2000single');
// IMPLIES('TDP', 'OWP');
// IMPLIES('TDP', 'PKE', 'yao1982theory');
// IMPLIES('TDP', 'OT');
// IMPLIES('TDP', 'KA', 'impagliazzo1989limits');
// IMPLIES('TDP', 'CPA-SIG', 'bellare1992sign');
// IMPLIES('TDP', 'TDF');
// IMPLIES('TDF', 'OWF');
// IMPLIES('PRNG', 'PRF');
// IMPLIES('PRNG', 'COM', 'naor1991bitcommitment');
// IMPLIES('CFP', 'CRHF', 'damgard1987collision');
// IMPLIES('CFP', 'CPA-SIG', 'goldwasser1988digital');
// IMPLIES('SKE', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('PKE', 'KA', 'impagliazzo1989limits');
// IMPLIES('PKE', 'SKE');
// IMPLIES('PRF', 'PRP', 'luby1988construct');
// IMPLIES('PRF', 'SKE', 'goldwasser2008lecture');
// IMPLIES('COM', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('SH-COM', 'COM');
// IMPLIES('EB-COM', 'NI-COM');
// IMPLIES('CB-COM', 'NI-COM');
// IMPLIES('ECRH', 'EB-COM');
// IMPLIES('ECRH', 'CRHF');
// IMPLIES('NI-COM', 'COM');
// IMPLIES('LTDF', 'ITDF', 'peikert2008lossy');
// IMPLIES('LTDF', 'CRHF', 'peikert2008lossy');
// IMPLIES('LTDF', 'OT', 'peikert2008lossy');
// IMPLIES('LTDF', 'PKE', 'peikert2008lossy');
// IMPLIES('LTDF', 'CB-COM', 'unruh2016collapse');
// IMPLIES('LTDF', 'TDF');
// IMPLIES('ITDF', 'TDF');
// IMPLIES('OT', 'KA', 'impagliazzo1989limits');
// // IMPLIES('ITDF', 'TDF'); //don't have the notion of trapdoor functions yet

// // relations of problems
// IMPLIES('DLOG', 'PRNG', 'blum1984generate');
// IMPLIES('DLOG', 'CFP', 'damgard1987collision');
// IMPLIES('DDH', 'LTDF', 'peikert2008lossy');
// IMPLIES('DDH', 'DLOG');
// IMPLIES('CDH', 'DDH');
// IMPLIES('FACTOR', 'PRNG');
// IMPLIES('FACTOR', 'CFP', 'goldwasser1988digital');
// IMPLIES('FACTOR', 'CF-TDP', 'goldwasser1988digital');
// IMPLIES('RSA', 'FACTOR');
// IMPLIES('RSA', 'TDP', 'rivest1978method');
// IMPLIES('RSA', 'CF-TDP', 'katz2010digital');
// IMPLIES('RSA', 'CPA-SIG', 'hohenberger2009short');
// IMPLIES('CF-TDP', 'TDP');
// IMPLIES('CF-TDP', 'CFP');
// IMPLIES('SVP', 'CRHF', 'goldreich2011collision');
// IMPLIES('SVP', 'OWF', 'ajtai1996generating');
// IMPLIES('SVP', 'LWE', 'brakerski2013classical');
// IMPLIES('LWE', 'LTDF', 'peikert2008lossy');
