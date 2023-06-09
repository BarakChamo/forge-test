// Generated by @wagmi/cli@1.0.0 on 5/24/2023 at 5:15:03 PM
import {
  getContract,
  GetContractArgs,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  watchContractEvent,
  WatchContractEventConfig,
  WatchContractEventCallback,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counterer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const countererABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link counterABI}__.
 */
export function getCounter(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: counterABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterABI}__.
 */
export function readCounter<
  TAbi extends readonly unknown[] = typeof counterABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({
    abi: counterABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterABI}__.
 */
export function writeCounter<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof counterABI, TFunctionName>, 'abi'>
    | Omit<
        WriteContractUnpreparedArgs<typeof counterABI, TFunctionName>,
        'abi'
      >,
) {
  return writeContract({
    abi: counterABI,
    ...config,
  } as unknown as WriteContractArgs<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link counterABI}__.
 */
export function prepareWriteCounter<
  TAbi extends readonly unknown[] = typeof counterABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: counterABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link counterABI}__.
 */
export function watchCounterEvent<
  TAbi extends readonly unknown[] = typeof counterABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi'>,
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    { abi: counterABI, ...config } as WatchContractEventConfig<
      TAbi,
      TEventName
    >,
    callback,
  )
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link countererABI}__.
 */
export function getCounterer(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: countererABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link countererABI}__.
 */
export function readCounterer<
  TAbi extends readonly unknown[] = typeof countererABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({
    abi: countererABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link countererABI}__.
 */
export function writeCounterer<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof countererABI, TFunctionName>, 'abi'>
    | Omit<
        WriteContractUnpreparedArgs<typeof countererABI, TFunctionName>,
        'abi'
      >,
) {
  return writeContract({
    abi: countererABI,
    ...config,
  } as unknown as WriteContractArgs<typeof countererABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link countererABI}__.
 */
export function prepareWriteCounterer<
  TAbi extends readonly unknown[] = typeof countererABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: countererABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link countererABI}__.
 */
export function watchCountererEvent<
  TAbi extends readonly unknown[] = typeof countererABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi'>,
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    { abi: countererABI, ...config } as WatchContractEventConfig<
      TAbi,
      TEventName
    >,
    callback,
  )
}
