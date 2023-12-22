// Sui Imports
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useWalletKit } from '@mysten/wallet-kit';


export const useMoveCalls = () => {
	const client = new SuiClient({ url: getFullnodeUrl('devnet') });
	const { signAndExecuteTransactionBlock } = useWalletKit();
	const packageObjectId = '0x988155dc80cf7dfaf950069260ea831d55029d59ea184afce244ef2660f43183'; // deployed object id for creating developer card 
	const tx = new TransactionBlock(); // Create a transaction block
	const devhub = tx.object("0x046aa8eb2e7e2d26ea876634e2bf1c0cfa2c9908d0ee14309c62e949656f8adf")
	
	
	// Move Calls
	
	 const handleCreateDeveloperCard = async () => {
	try {
		const [coin] = tx.splitCoins(tx.gas, [1]) // define payment coin
		
		// Calls the create_card function from the devcard package
		tx.moveCall({
			target: `${packageObjectId}::devcard::create_card`,
			arguments: [
				tx.pure.string('Matt Patt'), // name
				tx.pure.string('Frontend Developer'), // title
				tx.pure.string(
					'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
				), // img_url 
				tx.pure.u8(3), // years_of_experience
				tx.pure.string('JavaScript, Typescript, Next.js, Node.js'), // technologies
				tx.pure.string('https://mattpatt.dev'), // portfolio
				tx.pure.string('matt.patt@dev.com'), // contact
				coin, // payment coin
				devhub, // devhub obj
			],
		});
	
		// Sign and execute the transaction block
		const result =  await signAndExecuteTransactionBlock({ transactionBlock: tx });
		console.log(result)
	} catch (error) {
	
		// Handle the error
		console.error(error);
	}
		
	}

	
	const updateCardDescritonFunction = async () => {
	
		try {
			
			// Calls update_card_description function from the devcard package
			tx.moveCall({
				target: `${packageObjectId}::devcard::update_card_description`,
				arguments: [
					devhub, // devhub obj
					tx.pure.string('New description'),
					tx.pure.u64(2)
				],
			});
		
			// Sign and execute the transaction block
			const result =  await signAndExecuteTransactionBlock({ transactionBlock: tx });
			console.log({result})

		} catch (error) {
		
			// Handle the error
			console.error(error);
		}
			
		}
	
		const deactivateCard = async () => {
	
			try {
				
				// Calls deactivate_card function from the devcard package
				tx.moveCall({
					target: `${packageObjectId}::devcard::deactivate_card`,
					arguments: [
						devhub, // devhub obj
						tx.pure.u64(1)
					],
				});
			
				// Sign and execute the transaction block
				const result =  await signAndExecuteTransactionBlock({ transactionBlock: tx });
				console.log({result})
			} catch (error) {
			
				// Handle the error
				console.error(error);
			}
				
			}

			const getCards = async (id: any) => {
				try {
					
					// Call the create_card function from the devcard 
					console.log("=============")
					// Assign the result of moveCall to a variable
					const result = tx.moveCall({
						target: `${packageObjectId}::devcard::get_card_info`,
						arguments: [
							devhub,
							tx.pure.u64(id) 
						],
					})
				
					// Sign and execute the transaction block
					await signAndExecuteTransactionBlock({ transactionBlock: tx });
					
					// Print or use the result
					console.log(result) 
			
				} catch (error) {
				
					// Handle the error
					console.error(error);
				}
				
			}
	const cards =  client.getObject({
		id: "0x934cbeef5683edaefdfc0b9e166c88cd7db17472cfc1fe8867046d3e4a9de32f",
		options:{showType: true}
	})
	return {handleCreateDeveloperCard, getCards, updateCardDescritonFunction, deactivateCard, devhub}

} 