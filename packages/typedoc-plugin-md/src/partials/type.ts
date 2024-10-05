import type * as mdast from 'mdast'
import type { SignatureReflection, SomeType } from 'typedoc'

import * as m from '../utils/mdast'

export function getType(
  type: SomeType | undefined,
  preferSingleLine: boolean,
): mdast.RootContent[] {
  if (!type) {
    return []
  }

  const typeString = formatSomeType(type)

  const isSingleLine = !typeString.includes('\n')

  if (isSingleLine && preferSingleLine) {
    return [
      m.paragraph([
        m.strong([m.text('Type')]),
        m.text(': '),
        m.inlineCode(typeString),
      ]),
    ]
  }
  return [m.paragraph([m.strong([m.text('Type')])]), m.code(typeString)]
}

export function formatSomeType(type: SomeType): string {
  if (type.type === 'reflection') {
    const signatures = type.declaration.signatures
    if (signatures?.length) {
      return formatSignatures(signatures)
    }
  }

  return type.toString()
}

export function formatParameters(signature: SignatureReflection): string {
  const typeParametersString = signature.typeParameters
    ? `<${signature.typeParameters.map((typeParameter) => typeParameter.name).join(', ')}>`
    : ''

  const paramStrings: string[] = []

  for (const param of signature.parameters || []) {
    paramStrings.push(
      (param.flags.isRest ? '...' : '') +
        param.name +
        (param.flags.isOptional ? '?: ' : ': ') +
        (param.type ? formatSomeType(param.type) : 'unknown'),
    )
  }

  return `${typeParametersString}(${paramStrings.join(', ')})`
}

export function formatSignature(
  signature: SignatureReflection,
  arrow: boolean,
): string {
  const paramString = formatParameters(signature)

  const returnString = signature.type?.toString() || 'unknown'

  return `${paramString}${arrow ? ' => ' : ': '}${returnString}`
}

function formatSignatureOverloads(
  signatures: SignatureReflection[],
  arrow: boolean,
): string {
  return signatures
    .map((s) => formatSignature(s, arrow))
    .map((text) => `(${text})`)
    .join(' | ')
}

export function formatSignatures(signatures: SignatureReflection[]): string {
  if (signatures.length === 1) {
    return formatSignature(signatures[0], true)
  }

  return formatSignatureOverloads(signatures, true)
}
