��Z<?php exit; ?>a:1:{s:7:"content";O:8:"stdClass":24:{s:2:"ID";i:1196;s:11:"post_author";s:1:"2";s:9:"post_date";s:19:"2018-04-24 08:26:02";s:13:"post_date_gmt";s:19:"2018-04-24 08:26:02";s:12:"post_content";s:34755:"<p dir="ltr">Nearly everyone has heard of <a href="https://en.bitcoinwiki.org/wiki/Blockchain" target="_blank" rel="nofollow noopener">Blockchain</a> and that it is cool. But not everybody understands how it works. This article shows that Blockchain certainly isn’t magic.</p>

<h2 dir="ltr">What is Blockchain?<a id="what-is-blockchain" name="what-is-blockchain"></a></h2>
<p dir="ltr">A Blockchain is a diary that is almost impossible to forge.</p>

<h3 dir="ltr">Hash function<a id="hash-function" name="hash-function"></a></h3>
<p dir="ltr">Let's imagine that 10 people in one room decided to make a separate currency. They have to follow the flow of funds, and one person – let's call him Bob – decided to keep a list of all actions in a diary:</p>
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh4.googleusercontent.com/fOVQDsCF5UO-fDuVBOCwdV0qhD_0ir9teeCIeCsf8TwQvlM-VHNY3P3XjSDZfFPbdk_JQUrCziyl6fRon0iM11H4cMGzytszn6MtjYm-INDH60r8vTABwfvYPABzniIr5dOoHLLW" alt="Blockchain technology explained" /></p>
<p dir="ltr">One man – let’s call him Jack – decided to steal money. To hide this, he changed the entries in the diary:</p>
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh5.googleusercontent.com/4Jgq3iYZTzQejt2aVisGlbvVcuKnngZZoRlym04R75W1wvPMDBjU-wLqpeWW9lQh6DRaL3OSu-ksd08hEOqs33sj3ya5abC1G-UNo5doFuwc26FUILFSpw_oj-FUNLzlSMk7Saom" alt="Blockchain technology explained" /></p>
<p dir="ltr">Bob noticed that someone had interfered with his diary. He decided to stop this from happening.</p>
<p dir="ltr">He found a <a href="http://www.unit-conversion.info/texttools/md5/" target="_blank" rel="nofollow noopener">program</a> called a Hash function that turns text into a set of numbers and letters as in the table below.</p>
<p dir="ltr"><img title="Bitcoin Hash" src="https://lh3.googleusercontent.com/M9BRI8XJTmkZgJKs_p_5rjqXnBuM-Rss7Un2H4FIt-4BziKfi4xYLkVYcNOEYZybfIYW7sPPWu6f9Xv_LYIc_AuLiLh_D0P-WB_-rbBOEXJbc6o3HnflntDDLb0F8w090x1ilp14" alt="Bitcoin Hash" /></p>
<p dir="ltr">A hash is a string of numbers and letters, produced by hash functions. A hash function is a mathematical function that takes a variable number of characters and converts it into a string with a fixed number of characters. Even a small change in a string creates a completely new hash.</p>
After each record, he inserted a hash. The new diary was as follows:
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh6.googleusercontent.com/Vg2Lrrz4ZdZ4AL9edDUbt5j4LgkA_G65KHwnjuIciIsmmY0H_xKKeWVOTv1r89KOH56brwZBLL4F4L26P-dltE9WM7sYvmKB5jaCfOhPkaBUaibM5vWSxV8z-sq_CntH4t7HhVr_" alt="Blockchain technology explained" /></p>
<p dir="ltr">Jack decided to change entries again. At night, he got to the diary, changed the record and generated a new hash.</p>
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh5.googleusercontent.com/2JjO5_HUUmzEsx2S5RUckYnoZAXnuE39SVAQIpRsAB2ht2V1U8NzqEmKRb2xQJmJdcieHsCRyly5C5zkWX3K1OJhe4jXb60rkt40yrYn7m602trEOQ44h-JEUsWKYwpGmN0IfeBN" alt="Blockchain technology explained" /></p>
<p dir="ltr">Bob noticed that somebody had sifted through the diary again. He decided to complicate the record of each transaction. After each record, he inserted a hash generated from the record+last hash. So each entry depends on the previous.</p>
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh5.googleusercontent.com/L1bBk6ITBijfXYNTXS7bJsz8Ykn0hpETAnd4ZWiEyxxqfpAxy7ufQjXTpyyWd6Xlao3rJRaQ1EsKmubWg3EaRgn2kM4MIk2IoKctfqEmVlKSTeXxjcL4sNXsTb6dwUjedji5jgzI" alt="Blockchain technology explained" /></p>
<p dir="ltr">If Jack tries to change the record, he will have to change the hash in all previous entries. But Jack really wanted more money, and he spent the whole night counting all the hashes.</p>

<h3 dir="ltr">Nonce<a id="nonce" name="nonce"></a></h3>
<p dir="ltr">But Bob did not want to give up. He decided to add a number after each record. This number is called “<a href="https://en.bitcoinwiki.org/wiki/Nonce" target="_blank" rel="nofollow noopener">Nonce</a>”. Nonce should be chosen so that the generated hash ends in two zeros.</p>
<p dir="ltr"><img title="Blockchain technology explained" src="https://lh6.googleusercontent.com/nu79fqoRuLytjEEmz-eCkLq4XFerNNRZL05K_evpfwCKVmsQyx842SST3vsVolyFvCEm_bml9Oo0IdJ4wEP8ozxyHCvoeij1jQMdzSc4Zgy-_cwXCz1W5ry_3AqSU_w9yZl0SVxY" alt="Blockchain technology explained" /></p>
<p dir="ltr">Now, to forge records, Jack would have to spend hours and hours chosing Nonce for each line.</p>
<p dir="ltr">More importantly, not only people, but computers <a href="https://en.wikipedia.org/wiki/P_versus_NP_problem" target="_blank" rel="nofollow noopener">can’t</a> figure out the Nonce quickly.</p>

<h3 dir="ltr">Nodes<a id="nodes" name="nodes"></a></h3>
<p dir="ltr">Later, Bob realized that there were too many records and that he couldn’t keep the diary like this forever. So when he wrote 5,000 transactions, he converted them to a one page spreadsheet. Mary checked that all transactions were right.</p>
<p dir="ltr">Bob spread his spreadsheet diary over 5,000 computers, which were  all over the world. These computers are called <a href="https://en.bitcoinwiki.org/wiki/Node" target="_blank" rel="nofollow noopener">nodes</a>. Every time a transaction occurs it has to be approved by the nodes, each of whom checks its validity. Once every node has checked a transaction there is a sort of electronic vote, as some nodes may think the transaction is valid and others think it is a fraud.</p>
<p dir="ltr">The nodes referred to above are computers. Each node has a copy of the digital ledger or Blockchain. Each node checks the validity of each transaction. If a majority of nodes say that a transaction is valid then it is written into a block.</p>
<p dir="ltr">Now, if Jack change one entry, all the other computers will have the original hash. They would not allow the change to occur.</p>

<h3 dir="ltr">Block<a id="block" name="block"></a></h3>
<p dir="ltr">This one spreadsheet is called a <a href="https://en.bitcoinwiki.org/wiki/Block" target="_blank" rel="nofollow noopener">block</a> .The whole family of blocks is the Blockchain. Every node has a copy of the Blockchain. Once a block reaches a certain number of approved transactions then a new block is formed.</p>
<p dir="ltr">The Blockchain updates itself every ten minutes. It does so automatically. No master or central computer instructs the computers to do this.</p>
<p dir="ltr">As soon as the spreadsheet or ledger or registry is updated, it can no longer be changed. Thus, it’s impossible to forge it. You can only add new entries to it. The registry is updated on all computers on the network at the same time.</p>

<h3 dir="ltr">Important points:<a id="important-points" name="important-points"></a></h3>
<ol dir="ltr">
 	<li>A Blockchain is a type of diary or spreadsheet containing information about transactions.</li>
 	<li>Each transaction generates a hash.</li>
 	<li>A hash is a string of numbers and letters.</li>
 	<li>Transactions are entered in the order in which they occurred. Order is very important.</li>
 	<li>The hash depends not only on the transaction but the previous transaction's hash.</li>
 	<li>Even a small change in a transaction creates a completely new hash.</li>
 	<li>The nodes check to make sure a transaction has not been changed by inspecting the hash.</li>
 	<li>If a transaction is approved by a majority of the nodes then it is written into a block.</li>
 	<li>Each block refers to the previous block and together make the Blockchain.</li>
 	<li>A Blockchain is effective as it is spread over many computers, each of which have a copy of the Blockchain.</li>
 	<li>These computers are called nodes.</li>
 	<li>The Blockchain updates itself every 10 minutes.</li>
</ol>
<h2>Wallets, digital signatures, protocols<a id="wallets-digital-signatures-protocols" name="wallets-digital-signatures-protocols"></a></h2>
<p dir="ltr">Bob gathered the 10 people together. He needed to explain the new coin to them.</p>
<p dir="ltr">Jack had confessed his sins to the group and deeply apologized. To prove his sincerity he gave Ann and Mary their coins back.</p>
<p dir="ltr">With all that sorted, Bob explained why this could never happen again. He decided to implement something called a digital signature to confirm every transaction. But first, he gave everyone a wallet.</p>

<h3 dir="ltr">What is a wallet?<a id="what-is-a-wallet" name="what-is-a-wallet"></a></h3>
<p dir="ltr">A wallet is a string of numbers and letters, such as 18c177926650e5550973303c300e136f22673b74. This is an address that will appear in various blocks within the Blockchain as transactions take place. No visible records of who did what transaction with who, only the number of a wallet. The address of each particular wallet is also a public key.</p>
<p dir="ltr">Read more in the article <a href="https://cointelegraph.com/bitcoin-for-beginners/what-is-bitcoin-wallets" target="_blank" rel="noopener">“Bitcoin Wallets: everything you need to know”</a>.</p>

<h3 dir="ltr">Digital signature<a id="digital-signature" name="digital-signature"></a></h3>
<p dir="ltr">To carry out a transaction you need two things: a wallet, which is basically an address, and a private key. The private key is a string of random numbers, but unlike the address the private key must be kept secret.</p>
<p dir="ltr">When someone decides to send coins to anyone else they must sign the message containing the transaction with their private key. The system of two keys is at the heart of encryption and cryptography, and its use long predates the existence of Blockchain. It was first proposed in the 1970s.</p>
<p dir="ltr">Once the message is sent it is broadcast to the Blockchain network. The network of nodes then works on the message to make sure that the transaction it contains is valid. If it confirms the validity, the transaction is placed in a block and after that no information about it can be changed.</p>
<p dir="ltr"><img title="Digital signature explained" src="https://lh4.googleusercontent.com/XqdtFmFZwFq9aM3__zUwymVIi9tUWx1HDAjyatKjFMTp5jGpNZ3c7oUH00iyE3JMIaBS0tF2aouc26CFvN4YvPLR5N65tPYQ2QrryjAHXD9wQHlpPsjyX7NBnVgrsLyeUZKeAoqz" alt="Digital signature explained" /></p>

<h3 dir="ltr">What are cryptographic keys?<a id="what-are-cryptographic-keys" name="what-are-cryptographic-keys"></a></h3>
<p dir="ltr">A cryptographic key is a string of numbers and letters. Cryptographic keys are made by key generators or keygens. These keygens use very advanced mathematics involving prime numbers to create keys.</p>

<h3>Protocols<a id="protocols" name="protocols"></a></h3>
The Blockchain consists of individual behaviour specifications, a large set of rules that are programmed into it. Those specifications are called protocols. The implementation of specific protocols essentially made Blockchain what it is — a distributed, peer-to-peer and secured information database.

The Blockchain protocols ensure that the network runs the way it was intended to by its creators, even though it’s completely autonomous and isn’t controlled by anyone. Here are some examples of protocols implemented in Blockchain:
<ul dir="ltr">
 	<li>Input information for every hash number has to include the previous block’s hash number.</li>
 	<li>The reward for successfully mining a block decreases by half after every 210,000 blocks are sealed-off.</li>
 	<li>In order to keep the amount of time needed to mine one block at approximately 10 minutes, mining difficulty is recalculated every 2,016 blocks.</li>
</ul>
<h3 dir="ltr">Proof of Work<a id="proof-of-work" name="proof-of-work"></a></h3>
<p dir="ltr">The placing of a transaction in a block is called a successful conclusion to a proof of work challenge, and is carried out by special nodes called miners.</p>
<p dir="ltr">Proof of Work is a system that requires some work from the service requester, usually meaning processing time by a computer. Producing a proof of work is a random process with low probability, so normally a lot of trial and error is required for a valid proof of work to be generated. When it comes to Bitcoins, hash is what serves as a proof of work.</p>

<h3>What is mining?<a id="what-is-mining" name="what-is-mining"></a></h3>
<p dir="ltr">Miners on a Blockchain are nodes that produce blocks by solving proof of work problems. If a miner produces a block that is approved by an electronic consensus of nodes then the miner is rewarded with coins. As of October 2017, Bitcoin miners get 12.5 Bitcoins per block.</p>
<p dir="ltr">The reward is not the the only incentive for miners to keep running their hardware. They also get the transaction fees that Bitcoin users pay. Currently, as there is a huge amount of transactions happening within the Bitcoin network, the transaction fees have skyrocketed. Even though the fees are voluntary on the part of the sender, miners will always prioritize transfers with higher transaction fees. So, unless you are willing to pay a rather high fee, your transaction might take a very long time to be processed.</p>
<p dir="ltr">Read more in the article “<a href="https://cointelegraph.com/bitcoin-for-beginners/what-is-mining" target="_blank" rel="noopener">What is Mining”</a>.</p>

<h3 dir="ltr">Important points<a id="important-points" name="important-points"></a></h3>
<ol dir="ltr">
 	<li>If you possess digital money then you need a digital wallet.</li>
 	<li>A wallet is an address on the Blockchain.</li>
 	<li>A wallet is a public key.</li>
 	<li>Someone wanting to conduct a transaction must send a message with the transaction signed with their private key.</li>
 	<li>Before a transaction is approved it is checked by every node who vote on it in a special electronic way that is different to the elections that most countries have.</li>
 	<li>A transaction is placed in a block by miners who are special nodes.</li>
 	<li>The computers in the network holding the Blockchain are called nodes.</li>
 	<li>Miners place transactions in blocks in response to proof of work challenges.</li>
 	<li>After miners successfully 'seal off' a block of transaction, they receive a reward, which currently stands at 12.5 BTC, and they also get to keep a transaction fees Bitcoin holders pay.</li>
 	<li>Interaction is carried out on a Blockchain using rules built into the program of the Blockchain called protocols.</li>
 	<li>Cryptography is essential on Blockchains to thwart thieves who would like to hack into the Blockchain.</li>
 	<li>Cryptographic keys are made by key generators or keygens.</li>
 	<li>Keygens use very advanced mathematics involving prime numbers to create keys.</li>
 	<li>A block contains a timestamp, a reference to the previous block, the transactions and the computational problem that had to be solved before the block went on the Blockchain.</li>
 	<li>The distributed network of nodes that need to reach consensus makes fraud almost impossible within the Blockchain.</li>
</ol>
<h2 dir="ltr">Principles of Blockchain<a id="principles-of-blockchain" name="principles-of-blockchain"></a></h2>
<h3>Distributed database<a id="distributed-database" name="distributed-database"></a></h3>
<p dir="ltr">The database is the Blockchain and each node on a Blockchain has access to the whole Blockchain. No one node or computer regulates the information it contains. Every node is able to validate the records of the Blockchain. This is all done without one or several intermediaries in control of everything.</p>
It is architecturally decentralized as there is no one or several points of failure. There is no one point of failure that would bring down the Blockchain.

However the nodes of a Blockchain are logically centralized, as the entire Blockchain is a distributed network performing certain actions programmed into it.
<h3>Peer-to-peer (P2P) transmission<a id="peertopeer-p2p-transmission" name="peertopeer-p2p-transmission"></a></h3>
<div class="text">
<p dir="ltr">In line with the first principle, communication is always happening directly between peers, rather than through some central node. Information about what is happening on the Blockchain is stored on each node then passed to adjacent nodes. In this way information spreads through the whole network.</p>

<h3>Transparency yet pseudonymity<a id="transparency-yet-pseudonymity" name="transparency-yet-pseudonymity"></a></h3>
<p dir="ltr">Anyone inspecting the Blockchain is capable of seeing every transaction and its hash value. Someone using the Blockchain is able to be anonymous if they wish or they can give their identification to others. All that you see on the Blockchain is a record of transactions between Blockchain addresses.</p>

<h3 dir="ltr">Records<a id="records" name="records"></a></h3>
<p dir="ltr"><img title="Records" src="https://lh4.googleusercontent.com/Qh3a8fLxyI8TS-ytfUydEgbabOw47egjXgnWkFu1846EOQifFS1-M33IFPltgr7OETWpD--WMI7rSeR_WqCJ9RYVRLemsWyLxVzLn_PweO0zuwiDdjEwOZupIJ4mCDs-d3B0HO6Yd-th-YuC3A" alt="Records" /></p>
<p dir="ltr">Once the recording of a transaction is on the Blockchain and the Blockchain has been updated, then the alteration of the records of this transaction is impossible. This is due to that particular transaction record being linked to the record of every preceding one. Blockchain records are permanent, they are ordered chronologically, and they are available to all the other nodes. The diagram shows an extract from the Bitcoin Blockchain.</p>

<h3>Why it is impossible to turn off the network?<a id="why-it-is-impossible-to-turn-off-the-network" name="why-it-is-impossible-to-turn-off-the-network"></a></h3>
<p dir="ltr">As there are nodes throughout the world it is virtually impossible for the entire network to be taken over by a single party.</p>

<h3 dir="ltr">Why is it almost impossible to fake a block?<a id="why-is-it-almost-impossible-to-fake-a-block" name="why-is-it-almost-impossible-to-fake-a-block"></a></h3>
<p dir="ltr">The reason that faking a block is almost impossible is that the validity of the block and, by extension, its inclusion into the Blockchain is determined by an electronic consensus of nodes. There are thousands of these nodes, scattered all over the world, and as a consequence capturing the network would require a computer with impossible power.</p>

<h3 dir="ltr">Can you use a Blockchain as normal database?<a id="can-you-use-a-blockchain-as-normal-database" name="can-you-use-a-blockchain-as-normal-database"></a></h3>
<p dir="ltr">Can you store 3GB of files on the Blockchain in the same way you could use Access, Filemaker or MySql? This would not be a good idea. Most Blockchains are not suitable for this by design or simply lack the required capacity.</p>
<p dir="ltr">Traditional online databases usually use a client-server network architecture. This means that users with access rights can change entries stored in the database, but the overall control remains with administrators. When it comes to a Blockchain database, each user is in charge of maintaining, calculating and updating every new entry. Every single node must work together to make sure that they are coming to the same conclusions.</p>
<p dir="ltr">The Blockchain architecture also means that each node must work independently and compare the results of their work with the rest of the network. So, reaching a consensus can be very time-consuming. Because of this, Blockchain networks are considered to be very slow compared to traditional digital transaction technology.</p>
<p dir="ltr">However, there are experiments of producing databases with Blockchain technology, with <a href="https://www.bigchaindb.com/">BigchainDB</a> being the first major company in the field. The creators took an enterprise-class distributed database and built their technology on top of it, while adding the three key attributes of the Blockchain: decentralization, immutability and the ability to register and transfer assets. Whether what they have created is useful remains to be determined.</p>

<h3 dir="ltr">Important points<a id="important-points" name="important-points"></a></h3>
<ol dir="ltr">
 	<li>The Blockchain is a database, which is distributed among all nodes.</li>
 	<li>No one or several nodes control the Blockchain.</li>
 	<li>All nodes are able to validate a transaction.</li>
 	<li>All communication on the Blockchain is p2p.</li>
 	<li>Anyone using a Blockchain is anonymous if that is what they wish.</li>
 	<li>All transactions occurring on a Blockchain are recorded there, so the transactions of any person using the network are public and completely transparent, even though they may be anonymous.</li>
 	<li>Once a transaction is recorded on the Blockchain and the Blockchain has updated, then that transaction cannot be altered.</li>
 	<li>No one person or organization can turn off a Blockchain.</li>
 	<li>Although a Blockchain is politically and architecturally decentralized it is logically centralized.</li>
</ol>
<h2 dir="ltr">Where can Blockchain be used?<a id="where-can-blockchain-be-used" name="where-can-blockchain-be-used"></a></h2>
<p dir="ltr">In the following part of the article we will discuss some of the many various applications using Blockchain. We will frequently use the term smart contract. Let us define the term.</p>
<p dir="ltr">The Blockchain is ideal for what are known as smart contracts.</p>
<p dir="ltr">What are smart contracts?</p>
<p dir="ltr">Smart contracts define the rules and penalties around a specific agreement in the same way as traditional contracts do. However, the big difference is that smart contracts automatically enforce those obligations. The contracts are coded so that they are discharged on the fulfillment of specific criteria.</p>
<p dir="ltr"><strong>1. A warranty claim</strong></p>
<p dir="ltr">Usually settling warranty claims is expensive, time-consuming and often difficult for those making the claim. It is possible to implement smart contracts using Blockchain that will inevitably make the process a lot easier.</p>
<p dir="ltr">In the past when a claim is made, all checks would be carried out by humans, which can be time-consuming and leaves room for human error. This will become unnecessary, as checks to ensure that all criteria have been met, and can be done automatically using the Blockchain. Once all obligations are fulfilled, the resulting payout is automatic. This can all be done using minimum human involvement.</p>
<p dir="ltr">One of the solutions <a href="https://www2.deloitte.com/nl/nl/pages/deloitte-digital/artikelen/warranty-solution-based-on-blockchain.html" target="_blank" rel="nofollow noopener">offered</a> by Deloitte is the inclusion of a QR-code in a receipt. The QR-code is set to contain all the relevant information regarding the purchase: item, serial number, date of purchase and so on. With it, the QR-code also holds instructions on how to find a ‘warranty bot’ on Facebook Messenger. The user can then send a picture of the receipt to that bot, the engine unwraps the QR-code and stores all the product information on the Blockchain.</p>
<p dir="ltr"><strong>2. Derivatives</strong></p>
<p dir="ltr">Derivatives are used in stock exchanges and are concerned with the values of assets. Smart contracts in the trading of stocks and shares could revolutionize current practices by streamlining, automating and reducing the costs of derivatives trading across the industry. Settlements could be completed in seconds rather than the three days that are needed at present. Using smart contracts, peer-to-peer trading will become a usual operation, resulting in a complete revolution in stock trading. Barclays and several other companies has already <a href="https://www.cnbc.com/2016/04/19/barclays-used-blockchain-tech-to-trade-derivatives.html" target="_blank" rel="nofollow noopener">trialed</a> a way of trading derivatives using smart contracts, but they came to the conclusion that the technology won’t work unless banks collaborate to implement it.</p>
<p dir="ltr"><strong>3. Insurance claims</strong></p>
<p dir="ltr">With smart contracts, a certain set of criteria for specific insurance-related situations can be established. In theory, with the implementation of Blockchain technology, you could just submit your insurance claim online and receive an instant automatic payout. Providing, of course, that your claim meets all the required criteria. French insurance giant AXA is the first major insurance group to offer insurance using Blockchain technology. They’ve recently <a href="https://www.axa.com/en/newsroom/news/axa-goes-blockchain-with-fizzy?utm_source=Triggermail&amp;utm_medium=email&amp;utm_campaign=Post%20Blast%20%28bii-fintech%29:%20AXA%20turns%20to%20smart%20contracts%20for%20flight-delay%20insurance%20" target="_blank" rel="nofollow noopener">introduced</a> a new flight-delay insurance product that will use smart contracts to store and process payouts. Other insurance companies will surely follow suit.</p>
<p dir="ltr"><strong>4. Identity verification</strong></p>
<p dir="ltr">Too much time and effort is currently wasted on identity verification. Using the decentralization of Blockchains, the verification of online identity will be much quicker. Online identity data in a central location will vanish with the use of the Blockchain smart contracts. Computer hackers will no longer have centralized points of vulnerability to attack. Data storage is tamper-proof and incorruptible when backed by Blockchain. All over the world, the Blockchain is leading to big improvements in the verification of identity.</p>
<p dir="ltr">The city of Zug in Switzerland uses a decentralized application (DAPP) for the verification of its citizens’ electronic identities. Another producer of DAPPs, for identity verification is <a href="http://www.oraclize.it/" target="_blank" rel="nofollow noopener">Oraclize</a> in Estonia. It markets a DAPP to solve the KYC (Know Your Customer) problem. This is of major importance in identity verification. The organization <a href="https://www.thomsonreuters.com/en.html" target="_blank" rel="nofollow noopener">Thomson Reuters</a> is creating another DAPP for identity verification using Ethereum.</p>
<p dir="ltr"><strong>5. The Internet of Things (IoT)</strong></p>
<p dir="ltr">The Internet of Things (IoT) is the network of physical devices, vehicles and other items embedded with software, actuators, sensors, software and network connectivity, connected to the Internet. All of those features enable such objects to collect and exchange data. Blockchain and its smart contracts are ideal for this.</p>
<p dir="ltr">Projects involving smart contracts for devices have been predicted to become very common. The world's leading IT research company, <a href="https://www.gartner.com/technology/home.jsp" target="_blank" rel="nofollow noopener">Gartner</a>, has made the prediction that by the time we reach 2020 at least 20 bln connected devices will exist. These devices are using Ethereum smart contracts. For instance, we have the <a href="https://www.ethnews.com/blockchainfirst-worlds-first-ethereum-light-bulb" target="_blank" rel="nofollow noopener">Ethereum lightbulb</a>, we have the <a href="https://cryptofr.com/topic/2565/blockcharge-ev-charging-via-the-ethereum-blockchain" target="_blank" rel="nofollow noopener">Ethereum BlockCharge</a>, involving the charging of electric vehicles, and lastly <a href="https://www.chronicled.com/cryptoseal.html" target="_blank" rel="nofollow noopener">CryptoSeal</a>; this is a tamper-proof seal for drug safety.</p>
<p dir="ltr">Blockchain will play a major role in the roll out of IoT, but will also provide ways of guarding against hackers. Because it is built for decentralized control, a security scheme based on it should be scalable enough to cover the rapid growth of the IoT. Moreover, Blockchain’s strong protection against data tampering will help prevent a rogue device from disrupting a home, factory or transportation system by relaying misleading information.</p>
<p dir="ltr"><strong>6. Archiving and file storage</strong></p>
<p dir="ltr">Google Drive, Dropbox, etc. have thoroughly developed the electronic archiving of documents with the use of centralized methods. Centralized sites are always tempting to hackers. Blockchain and its smart contracts offer ways of reducing this threat substantially.</p>
<p dir="ltr">There are many Blockchain projects which aim to do this. Bear in mind, however, that there is often not enough storage within Blockchains themselves, but there are decentralized cloud storage solutions available, such as <a href="https://storj.io/" target="_blank" rel="nofollow noopener">Storj</a>, <a href="http://sia.tech/" target="_blank" rel="nofollow noopener">Sia</a>, <a href="https://swarm-guide.readthedocs.io/en/latest/" target="_blank" rel="nofollow noopener">Ethereum Swarm</a> and so on. From the user’s perspective they work just like any other cloud storage. The difference is that the content is hosted on various anonymous users’ computers, instead of data centers.</p>
<p dir="ltr"><strong>7. The protection of intellectual property</strong></p>
<p dir="ltr">Archiving enabled by Blockchain will offer much greater protection of intellectual property than before. An application called <a href="https://www.ascribe.io/" target="_blank" rel="nofollow noopener">Ascribe</a>, using Blockchain, already gives this protection.</p>
<p dir="ltr"><strong>8. Crime</strong></p>
<p dir="ltr">Lawbreakers have to hide and camouflage the money gained from their exploits. Currently this is done with fake bank accounts, gambling, and offshore companies, among other stratagems. There are a lot of concerns regarding the transparency of cryptocurrency transactions. But, all of the necessary regulatory elements, such as identifying parties and information, records of transactions and even enforcement can exist in the cryptocurrency system.</p>
<p dir="ltr">As the technology gets more mainstream attention, Blockchain and its smart contracts have the potential to render most money laundering tactics ineffective and very traceable.</p>
<p dir="ltr"><strong>9. Social media</strong></p>
<p dir="ltr">At present, social media organizations are able to freely use the personal data of their clients. This helps them make billions of dollars. Using Blockchain smart contracts, users of social media will be enabled to sell their personal data, if they so desire. Such ideas are being <a href="http://openpds.media.mit.edu/" target="_blank" rel="nofollow noopener">investigated</a> at MIT. The aim of the OPENPDS/SA project is to provide the data-owner to tune the degree of privacy preservation using the Blockchain technology.</p>
<p dir="ltr"><strong>10. The use of smart contracts in elections and polls</strong></p>
<p dir="ltr">Elections and polls could be greatly improved with smart contracts. There are various apps already in existence, such as <a href="http://blockchaintechcorp.com/" target="_blank" rel="nofollow noopener">Blockchain Voting Machine</a>, <a href="https://followmyvote.com/" target="_blank" rel="nofollow noopener">Follow My Vote</a> and <a href="http://www.smartmatic.com/voting/online-voting-tivi/" target="_blank" rel="nofollow noopener">TIVI</a>. All of them are promising to eliminate fraud, while providing complete transparency to the results and keeping the votes anonymous. However, there is still a long road ahead before decentralized voting is implemented widely.</p>

<h2>Limitations and vulnerability<a id="limitations-and-vulnerability" name="limitations-and-vulnerability"></a></h2>
<p dir="ltr">Any Blockchain network largely depends on the amount of active users within it. In order to operate to its full potential, a network has to be a robust one with a widely distributed grid of nodes.</p>
<p dir="ltr">Moreover, there is no Blockchain network in existence that could sustain the same amount of transactions as major card issuers like Visa or MasterCard do. As of 2017, Blockchain still has a very long way to go before it will be capable of replacing the giants of the financial world.</p>
<p dir="ltr">Finally, there is always a theoretical possibility of a large-scale capture of any given Blockchain network. If a single organization will somehow manage to gain control of the majority of the network’s nodes, it will no longer be decentralized in the full sense of the word.</p>

<h2 dir="ltr">Blockchain investment climate<a id="blockchain-investment-climate" name="blockchain-investment-climate"></a></h2>
<p dir="ltr">As Bitcoin’s price hit the record $5,000 for the second time in 2017, there is probably no current investment opportunity more hyped up than cryptocurrencies and Blockchain technology. The general public and governing authorities are increasingly more aware of its advantages, and most concerns surrounding it are being refuted. A lot of companies <a href="http://www.investopedia.com/news/ibm-blockchain-investment/" target="_blank" rel="nofollow noopener">have already invested</a> in the technology, and it is very telling that the worldwide technology giant IBM is now considering investing “employee time and energy” into the space.</p>
<p dir="ltr">Many companies offer credit cards in a pursuit of encouraging loyalty and adding a new stream of revenue. Samsung has recently <a href="http://www.zdnet.com/article/samsung-sds-blocko-to-develop-blockchain-for-samsung-card/" target="_blank" rel="nofollow noopener">partnered</a> with Blocko aiming to allow credit cards to engage in secure transactions using Blockchain technology. Samsung are aiming to create new business using digital identity, digital money and digital payment.</p>
<p dir="ltr">According to a <a href="https://www.cbinsights.com/research/report/blockchain-trends-opportunities/" target="_blank" rel="nofollow noopener">report</a>, as of October 2017, there have been 42 equity investment deals in 2017 alone, totalling $327 mln. The most active investor is a Japanese services firm SBI Holding, with stakes in eight Blockchain firms. A digital powerhouse Google is the second-most active investor, with stakes in the Bitcoin wallet company Blockchain and <a href="https://ripple.com/" target="_blank" rel="nofollow noopener">Ripple</a>, a company that is working on Blockchain-based money transferring system.</p>

</div>";s:10:"post_title";s:52:"How Blockchain Technology Works. Guide for Beginners";s:12:"post_excerpt";s:0:"";s:11:"post_status";s:7:"publish";s:14:"comment_status";s:6:"closed";s:11:"ping_status";s:6:"closed";s:13:"post_password";s:0:"";s:9:"post_name";s:51:"how-blockchain-technology-works-guide-for-beginners";s:7:"to_ping";s:0:"";s:6:"pinged";s:0:"";s:13:"post_modified";s:19:"2018-04-24 08:28:18";s:17:"post_modified_gmt";s:19:"2018-04-24 08:28:18";s:21:"post_content_filtered";s:0:"";s:11:"post_parent";i:0;s:4:"guid";s:63:"https://cryptochannel.frb.io/?post_type=cryptopedia&#038;p=1196";s:10:"menu_order";i:0;s:9:"post_type";s:11:"cryptopedia";s:14:"post_mime_type";s:0:"";s:13:"comment_count";s:1:"0";s:6:"filter";s:3:"raw";}}