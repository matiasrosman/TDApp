

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';


export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('Agencias')
      .select('*');
 
    if (error) {
      throw error;
    }


    console.log('Data from Supabase:', data); // Agrega este log


    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error); // Agrega este log
    return NextResponse.json({ message: 'Error al obtener los usuarios', error }, { status: 500 });
  }
}

